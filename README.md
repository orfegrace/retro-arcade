# Retro Arcade

A retro pixel art-style browser arcade with 9 mini games, account sign-in, score tracking, light/dark mode, players dm, and a shared leaderboard.


## Games Included

* Hangman
* Memory Match
* Worm Game
* Tetris
* Plinko
* 2048
* Runner
* Whack-a-Mole
* Countdown

## Screenshots

### Arcade Home - Dark Mode

<img width="1440" height="751" alt="Screenshot 2026-06-14 at 10 14 29 AM" src="https://github.com/user-attachments/assets/2f280dad-1291-4eb5-aa42-bc19b81872cb" />

### Arcade Home - Light Mode

<img width="1440" height="751" alt="Screenshot 2026-06-14 at 10 14 54 AM" src="https://github.com/user-attachments/assets/8a188f96-6fce-4124-a4f0-98fd3de70145" />

### Leaderboard

<img width="1439" height="747" alt="Screenshot 2026-06-14 at 10 14 41 AM" src="https://github.com/user-attachments/assets/07b14528-a584-4496-83a5-4ed77eb5ca48" />

### Hangman

<img width="1440" height="754" alt="Screenshot 2026-06-14 at 10 16 35 AM" src="https://github.com/user-attachments/assets/533cbe40-600e-433f-ad38-c6792bbfae9f" />

### Memory Match 
<img width="1440" height="711" alt="Screenshot 2026-06-14 at 12 38 57 PM" src="https://github.com/user-attachments/assets/3a65b6df-fbdc-4e69-afff-7c7e028ea1ce" />


### 2048

<img width="1440" height="749" alt="Screenshot 2026-06-14 at 10 15 39 AM" src="https://github.com/user-attachments/assets/a4787cd4-09d8-4a47-9ff6-ab5e53d68485" />


## Project Structure

```text
```text
retro-arcade/
├── index.html              # main arcade homepage
├── hangman.html            # hangman game
├── memory.html             # memory card game
├── worm.html               # worm/snake-style game
├── tetris.html             # tetris game
├── plinko.html             # plinko game
├── 2048.html               # 2048 puzzle game
├── runner.html             # runner game
├── mole.html               # whack-a-mole game
└── countdown.html          # countdown/timer page
```

The top user menu includes:

```text
User Menu
├── Leaderboard
├── Players
└── Sign Out
```

## Firebase Setup

This project uses Firebase Firestore for:

* user account records
* leaderboard scores
* game score history

To use your own Firebase project:

1. Create a Firebase project.
2. Enable Firestore Database.
3. Add your Firebase configuration to the project.
4. Create Firestore collections

## Author

Created by Grace Chang.
