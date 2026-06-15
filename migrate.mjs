// One-time migration: moves users from user_secrets (plaintext passwords)
// into Firebase Authentication, and adds uid field to their users docs.
//
// Usage:
//   npm install firebase-admin
//   GOOGLE_APPLICATION_CREDENTIALS=./service-account.json node migrate.mjs

import admin from 'firebase-admin';

admin.initializeApp({ projectId: 'retro-arcade-f61e1' });

const db = admin.firestore();
const auth = admin.auth();

const secrets = await db.collection('user_secrets').get();
console.log(`Found ${secrets.size} users to migrate...\n`);

let ok = 0, skip = 0, fail = 0;

for (const doc of secrets.docs) {
  const { password, name } = doc.data();
  const nameLower = doc.id;
  const email = `${nameLower}@retro-arcade.app`;

  try {
    // Create (or retrieve existing) Firebase Auth account
    let userRecord;
    try {
      userRecord = await auth.createUser({ email, password, displayName: name });
    } catch (e) {
      if (e.code === 'auth/email-already-exists') {
        userRecord = await auth.getUserByEmail(email);
        skip++;
        console.log(`  SKIP (already exists): ${name}`);
      } else throw e;
    }

    // Add uid to the matching users doc
    const snap = await db.collection('users').where('name_lower', '==', nameLower).limit(1).get();
    if (!snap.empty) {
      await snap.docs[0].ref.update({ uid: userRecord.uid });
      if (!skip) { ok++; console.log(`  OK: ${name}`); }
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
