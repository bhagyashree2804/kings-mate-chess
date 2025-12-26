# Kings Mate Chess - Quick Start Guide

## 🎯 Project Overview

A complete full-stack chess application using:
- **Frontend**: React + Firebase Auth
- **Backend**: Node.js + Express + Firestore
- **Database**: Firebase Firestore (100% FREE)
- **Chess Engine**: Chess.js

## 📦 Project Files

```
kings-mate-chess-mern/
├── server/
│   ├── controllers/
│   │   ├── authController.js   (Firebase Auth handling)
│   │   └── gameController.js   (Game logic & Firestore)
│   ├── routes/
│   │   ├── auth.js
│   │   ├── games.js
│   │   └── users.js
│   ├── utils/
│   │   ├── ChessEngine.js      (Chess move validation)
│   │   └── auth.js             (Firebase middleware)
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
└── client/
    ├── src/
    │   ├── pages/
    │   │   ├── Login.js        (Firebase login)
    │   │   ├── Register.js     (Firebase signup)
    │   │   ├── Home.js         (Dashboard with games & leaderboard)
    │   │   └── Game.js         (Active game play)
    │   ├── components/
    │   │   └── ChessBoard.js   (Interactive board)
    │   ├── firebase.js         (Firebase config)
    │   ├── api.js              (API & Firebase calls)
    │   ├── store.js            (Zustand state)
    │   └── App.js
    ├── package.json
    └── .env.example
```

## 🚀 Installation Steps

### 1. Setup Firebase (5 minutes)
```
1. Go to https://console.firebase.google.com
2. Create new project "kings-mate-chess"
3. Enable Firestore Database (production mode)
4. Enable Authentication > Email/Password
5. Get credentials (see FIREBASE_SETUP.md)
```

### 2. Setup Backend
```bash
cd server
npm install

# Create .env with:
PORT=5000
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
NODE_ENV=development
CLIENT_URL=http://localhost:3000

npm run dev
# Server runs on http://localhost:5000
```

### 3. Setup Frontend
```bash
cd client
npm install

# Create .env with:
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id

npm start
# App opens at http://localhost:3000
```

## 🎮 Features

### User Authentication
- ✅ Register with email/password (Firebase)
- ✅ Login securely
- ✅ Auto logout
- ✅ Session persistence

### Game Features
- ✅ Create new games
- ✅ Join opponent's games
- ✅ Real-time board updates
- ✅ Move validation using chess.js
- ✅ Move history tracking
- ✅ Game status (waiting/active/completed)

### Dashboard
- ✅ View recent games
- ✅ Leaderboard of top players
- ✅ Player stats (wins/losses/draws)
- ✅ User rating system

## 🔧 How It Works

### Authentication Flow
```
Register/Login → Firebase Auth → ID Token → Backend API Calls
```

### Game Flow
```
Create Game → Firestore saves → Opponent joins → Moves sync in real-time
```

### Move Validation
```
Click square → Chess.js validates → Backend updates Firestore → UI updates
```

## 📊 Database Structure

### Firestore Collections

**users/{uid}**
```json
{
  "uid": "firebase_uid",
  "username": "player_name",
  "email": "player@example.com",
  "rating": 1200,
  "wins": 0,
  "losses": 0,
  "draws": 0,
  "createdAt": "timestamp"
}
```

**games/{gameId}**
```json
{
  "id": "game_id",
  "whitePlayerId": "uid",
  "whitePlayerName": "White's Name",
  "whitePlayerRating": 1200,
  "blackPlayerId": "uid or null",
  "blackPlayerName": "Black's Name or null",
  "blackPlayerRating": 1200,
  "status": "waiting|active|completed",
  "result": "white-win|black-win|draw|null",
  "moves": [{from: "e2", to: "e4", ...}],
  "currentFEN": "rnbqkbnr/...",
  "timeControl": "classic",
  "createdAt": "timestamp",
  "completedAt": "timestamp or null"
}
```

## 🔌 API Endpoints

| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| POST | /api/auth/register | No | Create user |
| POST | /api/auth/login | No | Login user |
| GET | /api/auth/me | Yes | Get current user |
| POST | /api/games | Yes | Create game |
| POST | /api/games/:gameId/join | Yes | Join game |
| POST | /api/games/:gameId/move | Yes | Make move |
| GET | /api/games/:gameId | No | Get game details |
| GET | /api/games/user/history | Yes | User's games |
| GET | /api/users/leaderboard | No | Top 50 players |
| GET | /api/users/:userId | No | Player profile |

## 🧪 Testing

### Test the App
```bash
# 1. Register as Player 1
- Go to http://localhost:3000/register
- Email: player1@test.com
- Password: test123
- Username: player1

# 2. Create a game
- Click "Play New Game"
- Copy the game URL

# 3. Open new browser window for Player 2
- Go to http://localhost:3000/register
- Email: player2@test.com
- Password: test123
- Username: player2
- Open the game URL from Player 1

# 4. Play the game
- Player 1 (White) makes first move
- Player 2 (Black) responds
- See move history update in real-time
```

## 🐛 Troubleshooting

### "Firebase not initialized"
- Check .env file in client folder
- All variables must have `REACT_APP_` prefix
- Restart the React app

### "Permission denied" in Firestore
- Update security rules (see FIREBASE_SETUP.md)
- Make sure Firebase auth is enabled
- Check Firebase console

### Backend not connecting
- Verify server is running on port 5000
- Check Firebase credentials in .env
- Ensure firebaseadmin SDK installed

### Moves not updating
- Check browser console for errors
- Verify Firestore security rules allow updates
- Test in new incognito window

## 📚 Important Files to Know

- **api.js** - All API calls and Firebase methods
- **store.js** - Global state management (Zustand)
- **firebase.js** - Firebase configuration
- **ChessEngine.js** - Chess move validation logic
- **authController.js** - User authentication
- **gameController.js** - Game logic and Firestore operations

## ✨ Key Features Implemented

- ✅ Complete chess game logic
- ✅ Real-time game updates
- ✅ User authentication
- ✅ Leaderboard system
- ✅ Game history tracking
- ✅ Move validation
- ✅ Responsive design
- ✅ 100% free with Firebase

## 🚀 Next Steps

1. Deploy backend to Heroku/Railway (free)
2. Deploy frontend to Firebase Hosting (free)
3. Update CORS and URLs in production
4. Enable additional Firebase features as needed

## 📖 Useful Resources

- [Firebase Console](https://console.firebase.google.com)
- [Chess.js Docs](https://github.com/jhlywa/chess.js)
- [Express.js Guide](https://expressjs.com)
- [React Docs](https://react.dev)
- See FIREBASE_SETUP.md for detailed Firebase guide
- See SETUP.md for more installation details

---

**Your chess app is ready to play! ♟️**
