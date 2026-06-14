# Retro Arcade

A pastel pixel-style browser arcade with multiple mini games, account sign-in, score tracking, light/dark mode, and a shared leaderboard.

## Overview

Retro Arcade is a web-based collection of classic mini games redesigned with a soft neon, CRT-inspired interface. The project combines simple game mechanics with a consistent arcade theme, animated backgrounds, user accounts, and Firebase-based leaderboard storage.

The site is designed as a personal arcade hub where users can sign in, select a game, play, and compare scores across different games.

## Features

* Retro pixel-art visual style
* Light and dark mode toggle
* User sign-in and account creation
* Firebase Firestore leaderboard
* Cross-game leaderboard with normalized scores
* Game-specific score tabs
* Animated card hover effects
* CRT scanline overlay
* Ambient background orbs, pixel stars, and shooting-star effects
* Simple sound effects using the Web Audio API
* Responsive game-card layout

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

### 2048

<img width="1440" height="749" alt="Screenshot 2026-06-14 at 10 15 39 AM" src="https://github.com/user-attachments/assets/a4787cd4-09d8-4a47-9ff6-ab5e53d68485" />

## Tech Stack

* HTML
* CSS
* JavaScript
* Firebase Firestore
* Google Fonts

  * VT323
  * Silkscreen
* Web Audio API

## Project Structure

```text
retro-arcade/
├── index.html
├── theme.css
├── hangman.html
├── memory.html
├── worm.html
├── tetris.html
├── plinko.html
├── 2048.html
├── runner.html
├── mole.html
└── countdown.html/
```

## How to Run Locally

1. Clone this repository.

```bash
git clone https://github.com/your-username/retro-arcade.git
```

2. Open the project folder.

```bash
cd retro-arcade
```

3. Run the project with a local server.

Using VS Code Live Server is the easiest option.

Or run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
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
4. Create Firestore collections such as:

```text
users
leaderboard
```

## Security Notes

The current account system is intended for a personal or demo arcade project. For a public deployment, Firebase Authentication is recommended instead of storing passwords directly in Firestore.

Recommended improvements before public release:

* Replace custom password storage with Firebase Authentication
* Add password hashing if keeping a custom account system
* Add stronger Firestore security rules
* Move Firebase configuration into a separate setup file
* Add score validation to reduce fake leaderboard submissions

## Future Improvements

* Add mobile-specific controls for every game
* Add sound settings
* Add player avatars
* Add achievements
* Add difficulty levels
* Add game instruction pages
* Add persistent user preferences
* Improve accessibility and keyboard navigation

## Author

Created by Grace Chang.
