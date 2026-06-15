// One-time migration: moves users from user_secrets (plaintext passwords)
// into Firebase Authentication, and adds uid field to their users docs.
//
// Usage:
//   npm install firebase-admin
//   GOOGLE_APPLICATION_CREDENTIALS=./service-account.json node migrate.mjs

import { initializeApp } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

initializeApp({ projectId: 'retro-arcade-f61e1' });

const db = getFirestore();
const auth = getAuth();

// Try user_secrets first, fall back to users collection (old format)
const secrets = await db.collection('user_secrets').get();
const users = await db.collection('users').where('password', '!=', '').get();

const toMigrate = [];
secrets.docs.forEach(d => toMigrate.push({ name: d.data().name, nameLower: d.id, password: d.data().password, docRef: null }));
users.docs.forEach(d => {
  if (d.data().password) toMigrate.push({ name: d.data().name, nameLower: d.data().name_lower, password: d.data().password, docRef: d.ref });
});

console.log(`Found ${toMigrate.length} users to migrate...\n`);

let ok = 0, skip = 0, fail = 0;

for (const { name, nameLower, password, docRef } of toMigrate) {
  const email = `${nameLower.replace(/\s+/g, '_')}@retro-arcade.app`;

  try {
    // Create (or retrieve existing) Firebase Auth account
    let userRecord;
    let alreadyExisted = false;
    try {
      userRecord = await auth.createUser({ email, password, displayName: name });
    } catch (e) {
      if (e.code === 'auth/email-already-exists') {
        userRecord = await auth.getUserByEmail(email);
        alreadyExisted = true;
        skip++;
        console.log(`  SKIP (already exists): ${name}`);
      } else throw e;
    }

    // Add uid to the matching users doc, remove plaintext password
    const ref = docRef || (await db.collection('users').where('name_lower', '==', nameLower).limit(1).get()).docs[0]?.ref;
    if (ref) {
      await ref.update({ uid: userRecord.uid, password: FieldValue.delete() });
      if (!alreadyExisted) { ok++; console.log(`  OK: ${name}`); }
    } else {
      console.log(`  WARN: no users doc found for ${name}`);
    }
  } catch (e) {
    fail++;
    console.error(`  FAIL: ${name} — ${e.message}`);
  }
}

console.log(`\nDone. ${ok} migrated, ${skip} skipped, ${fail} failed.`);
console.log('You can now delete the user_secrets collection in Firestore.');
