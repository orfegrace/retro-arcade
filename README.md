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

### Arcade Home + Menu Button (Dark Mode)

<img width="1440" height="706" alt="Screenshot 2026-06-15 at 3 15 06 PM" src="https://github.com/user-attachments/assets/42776d97-3f87-4cf9-806f-0cd178e77a37" />


### Arcade Home (Light Mode)

<img width="1440" height="705" alt="Screenshot 2026-06-15 at 3 11 56 PM" src="https://github.com/user-attachments/assets/27f2386b-ccf8-45af-a6c9-19bda62bad18" />

### Leaderboard

<img width="1440" height="691" alt="Screenshot 2026-06-15 at 3 14 53 PM" src="https://github.com/user-attachments/assets/c2ed1712-4213-4f32-b8f1-47e978e1269d" />

### Players 
<img width="1440" height="705" alt="Screenshot 2026-06-15 at 3 15 24 PM" src="https://github.com/user-attachments/assets/082a0f4c-9485-4d87-81d6-2b26709a3e83" />

### Hangman

<img width="1440" height="694" alt="Screenshot 2026-06-15 at 3 12 53 PM" src="https://github.com/user-attachments/assets/c9b0c5b0-df0e-4ba5-bdd8-6bc83c9625ac" />

### Memory Match 
<img width="1440" height="689" alt="Screenshot 2026-06-15 at 3 14 36 PM" src="https://github.com/user-attachments/assets/ce26ed30-2bd3-484c-a63f-016bc91d2a92" />


### Tetris 
<img width="1440" height="703" alt="Screenshot 2026-06-15 at 3 13 44 PM" src="https://github.com/user-attachments/assets/d5900700-de1e-4e5d-a850-ab09d333448c" />


### 2048

<img width="1440" height="689" alt="Screenshot 2026-06-15 at 3 13 25 PM" src="https://github.com/user-attachments/assets/dba092d1-a6f8-4b3c-86ec-de1edd5e3501" />


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

*Created by orfegrace*
