# Kings Mate Chess - Full Stack MERN Application

A complete chess application built with **MERN Stack** (MongoDB, Express, React, Node.js) + **Firebase** featuring real-time gameplay, user authentication, and chess engine logic.

## 🎯 Features

### Backend (Node.js + Express + Firebase)
- **Firebase Authentication**: Secure user login/signup (completely FREE)
- **Firestore Database**: NoSQL cloud database (free tier: 1GB storage)
- **Chess Logic**: Chess.js integration for move validation and game state
- **Game Management**: Create, join, and manage games
- **Real-time Updates**: Socket.io for live game synchronization
- **User Stats**: Track ratings, wins, losses, and draws
- **Leaderboard**: View top players and rankings

### Frontend (React)
- **Modern UI**: Clean, responsive design
- **Interactive Chessboard**: Visual board with piece movement and legal move highlighting
- **Game Lobby**: Find opponents and create games
- **Game Room**: Real-time multiplayer gameplay
- **User Profile**: View stats and game history
- **Firebase Auth**: Secure authentication

### Database (Firebase Firestore)
- **User Collection**: Username, email, rating, statistics
- **Game Collection**: Players, moves, FEN notation, game status
- **Move Tracking**: Complete move history with timestamps
- **Real-time Sync**: Automatic updates across all clients

## ✨ Why Firebase?

- ✅ **100% FREE** - No credit card required
- ✅ **Scalable** - Handles growth automatically
- ✅ **Secure** - Built-in authentication & security rules
- ✅ **Real-time** - Live data synchronization
- ✅ **Easy Setup** - No backend database infrastructure needed
- ✅ **Free Hosting** - Deploy your app for free

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- Google Account (free)
- Firebase Account (free)

### Step 1: Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable Firestore Database
4. Enable Authentication (Email/Password)
5. Get your Firebase config (see FIREBASE_SETUP.md)

### Step 2: Backend Setup

```bash
cd server
npm install
```

Create `.env` file with Firebase credentials:
```
PORT=5000
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY=your_private_key
FIREBASE_CLIENT_EMAIL=your_client_email
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

Start the server:
```bash
npm run dev
```

### Step 3: Frontend Setup

```bash
cd client
npm install
```

Create `.env` file with Firebase config:
```
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

Start the frontend:
```bash
npm start
```

The app will run at `http://localhost:3000`

## 📁 Project Structure

```
kings-mate-chess-mern/
├── server/          (Backend - Express + Firebase)
│   ├── models/      (Firestore document structures)
│   ├── controllers/ (Auth, Game logic)
│   ├── routes/      (API endpoints)
│   ├── utils/       (Chess engine, Firebase helpers)
│   └── server.js    (Main server file)
│
├── client/          (Frontend - React + Firebase)
│   ├── public/
│   ├── src/
│   │   ├── pages/   (Login, Register, Home, Game)
│   │   ├── components/ (ChessBoard, etc)
│   │   ├── api.js   (Firebase & API client)
│   │   ├── store.js (State management)
│   │   ├── firebase.js (Firebase config)
│   │   └── App.js
│   └── package.json
│
├── FIREBASE_SETUP.md (Detailed Firebase setup guide)
└── README.md        (This file)
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user (Firebase)
- `POST /api/auth/login` - Login user (Firebase)
- `GET /api/auth/me` - Get current user (protected)

### Games
- `POST /api/games` - Create new game
- `POST /api/games/:gameId/join` - Join waiting game
- `POST /api/games/:gameId/move` - Make a move
- `GET /api/games/:gameId` - Get game details
- `GET /api/games/user/history` - Get user's game history (protected)

### Users
- `GET /api/users/leaderboard` - Get top players
- `GET /api/users/:userId` - Get user profile

## 🎮 How to Play

1. **Register/Login** - Create an account using Firebase
2. **Create Game** - Start a new game as white player
3. **Find Opponent** - Wait for another player to join
4. **Make Moves** - Click on pieces to select, then click destination
5. **View Moves** - See move history and game status in real-time

## 🛠️ Technology Stack

### Backend
- **Express.js** - Web framework
- **Firebase Admin SDK** - Firestore & Auth management
- **Socket.io** - Real-time communication
- **chess.js** - Chess engine

### Frontend
- **React** - UI library
- **React Router** - Navigation
- **Firebase SDK** - Auth & Firestore access
- **Axios** - HTTP client
- **Zustand** - State management
- **CSS3** - Styling

### Database
- **Firebase Firestore** - Cloud NoSQL database (FREE)
- **Firebase Auth** - User authentication (FREE)

## 📚 Documentation

See detailed guides:
- [FIREBASE_SETUP.md](./FIREBASE_SETUP.md) - Complete Firebase setup
- [SETUP.md](./SETUP.md) - Installation & running

## 🚀 Deployment

### Deploy Frontend
- Firebase Hosting (free)
- Vercel (free)
- Netlify (free)

### Deploy Backend
- Heroku (free tier)
- Railway (free tier)
- Firebase Cloud Functions

## 📊 Free Tier Limits

Firebase Free Tier includes:
- **Firestore Database**: 1 GB storage, 50K reads/day
- **Authentication**: Unlimited users
- **Hosting**: 1 GB/month storage, 10 GB/month bandwidth

Perfect for a personal chess application!

## 🎓 Future Enhancements

- [ ] Time controls (bullet, blitz, rapid, classical)
- [ ] ELO rating system with updates
- [ ] Player search and matchmaking
- [ ] Game analysis and replay
- [ ] Chat during games
- [ ] Tournament mode
- [ ] Mobile app
- [ ] Spectator mode

## 📄 License

MIT License

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For issues and questions, please create an issue in the repository.

---

**Your free, scalable chess application is ready! ♟️**

