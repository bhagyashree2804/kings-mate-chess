# Kings Mate Chess - Setup & Installation Guide

## Quick Start Guide

### 1️⃣ Install MongoDB

**Option A: Local MongoDB**
- Download from https://www.mongodb.com/try/download/community
- Install and start MongoDB service

**Option B: MongoDB Atlas (Cloud)**
- Go to https://www.mongodb.com/cloud/atlas
- Create account and cluster
- Copy connection string

### 2️⃣ Setup Backend

```bash
cd server

# Install dependencies
npm install

# Create .env file with your settings
# Edit .env with your MongoDB URI and JWT secret

# Start the server
npm run dev
```

The server will run on `http://localhost:5000`

### 3️⃣ Setup Frontend

**In a new terminal:**

```bash
cd client

# Install dependencies
npm install

# Start React app
npm start
```

The app will open at `http://localhost:3000`

## 📱 Testing the Application

### Create Test Accounts
1. Go to http://localhost:3000/register
2. Create two accounts (Player 1 and Player 2)
3. Note: Use different emails for each account

### Play a Game
1. **Player 1**: Click "Play New Game" → Game created
2. **Player 2**: Login and click "Find Opponent" → Join the game
3. **Player 1**: Make a move by clicking a piece, then the destination
4. **Game continues** with alternating turns

## 🔧 Troubleshooting

### "Cannot connect to MongoDB"
- Check MongoDB is running: `mongod` in terminal
- Verify connection string in `.env`
- If using Atlas, whitelist your IP

### "Port 5000 already in use"
- Change `PORT=5001` in `.env`
- Update frontend proxy: `"proxy": "http://localhost:5001"`

### "npm: command not found"
- Install Node.js from https://nodejs.org
- Verify: `node --version` and `npm --version`

### CORS errors
- Make sure `CLIENT_URL` in `.env` matches your frontend URL
- Frontend proxy should point to backend port

## 🎯 Testing Checklist

- [ ] Can register new user
- [ ] Can login with credentials
- [ ] Can create new game
- [ ] Can view leaderboard
- [ ] Can join another player's game
- [ ] Can make valid chess moves
- [ ] Board updates in real-time
- [ ] Can view move history
- [ ] Game status updates correctly

## 🗄️ Database Collections

After playing, you'll have:
- `users` - User accounts with stats
- `games` - Game records with moves

### Sample User Document
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "username": "chessmaster",
  "email": "player@example.com",
  "password": "hashed_password",
  "rating": 1200,
  "wins": 5,
  "losses": 2,
  "draws": 1
}
```

### Sample Game Document
```json
{
  "_id": "507f1f77bcf86cd799439012",
  "whitePlayer": "507f1f77bcf86cd799439011",
  "blackPlayer": "507f1f77bcf86cd799439010",
  "moves": [
    {
      "from": "e2",
      "to": "e4",
      "piece": "P",
      "timestamp": "2024-01-15T10:30:00Z"
    }
  ],
  "status": "active",
  "currentFEN": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq e3 0 1",
  "timeControl": "classic"
}
```

## 🚀 Production Deployment

### Deploy Backend (Heroku)
```bash
cd server
heroku create your-app-name
git push heroku main
heroku config:set MONGODB_URI=your_atlas_uri
heroku config:set JWT_SECRET=your_secret
```

### Deploy Frontend (Vercel)
```bash
cd client
npm install -g vercel
vercel
```

Update frontend `.env` to backend production URL.

## 📊 Performance Tips

- Use MongoDB indexes for better query performance
- Implement game pagination for history
- Cache leaderboard data
- Use CDN for static assets

## 🔐 Security Considerations

- Use HTTPS in production
- Implement rate limiting on auth endpoints
- Validate all chess moves on backend
- Use strong JWT secrets
- Hash passwords with bcrypt
- Validate input on both client and server

## 📚 Additional Resources

- Chess.js Docs: https://github.com/jhlywa/chess.js
- Express Guide: https://expressjs.com
- React Docs: https://react.dev
- MongoDB Guide: https://docs.mongodb.com

## 🆘 Need Help?

1. Check the troubleshooting section above
2. Review browser console for errors
3. Check terminal output for server errors
4. Verify all environment variables are set
5. Ensure ports 3000 and 5000 are available

---

**You're all set! Start playing chess! ♚**
