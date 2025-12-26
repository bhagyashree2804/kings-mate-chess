# Firebase Setup Guide for Kings Mate Chess

## 🔥 Why Firebase?

Firebase is a **completely FREE** Backend-as-a-Service (BaaS) that includes:
- ✅ **Firestore Database** - NoSQL database (free tier: 1GB storage)
- ✅ **Authentication** - User login/signup (FREE)
- ✅ **Hosting** - Deploy your app (FREE)
- ✅ **Real-time Updates** - Live data synchronization
- ✅ **Security Rules** - Built-in access control
- ❌ **No credit card required** - 100% free forever

## 📋 Prerequisites

- Google Account (free)
- Node.js installed
- Project files ready

## 🚀 Step-by-Step Firebase Setup

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `kings-mate-chess` (or any name)
4. Continue through the setup steps
5. Enable Google Analytics (optional)
6. Click **"Create project"** and wait for it to complete

### Step 2: Enable Firestore Database

1. In Firebase Console, go to **Build → Firestore Database**
2. Click **"Create database"**
3. Choose **"Start in production mode"**
4. Select your region (closest to you)
5. Click **"Create"**

### Step 3: Enable Authentication

1. Go to **Build → Authentication**
2. Click **"Get Started"**
3. Click **"Email/Password"** provider
4. Enable **Email/Password** option
5. Save

### Step 4: Get Your Firebase Config

#### For Frontend:
1. Go to **Project Settings** (gear icon)
2. Under **"Your apps"**, click the web icon `</>`
3. Register app name: `kings-mate-chess-web`
4. Copy the Firebase config object
5. Store this for `.env` file

#### For Backend:
1. Go to **Project Settings → Service Accounts**
2. Click **"Generate new private key"**
3. This downloads a JSON file - save it securely
4. Copy the private key, project ID, and client email for `.env` file

### Step 5: Setup Backend Environment

Create `.env` file in `server/` folder:

```env
PORT=5000
FIREBASE_PROJECT_ID=your_project_id_here
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxx@your-project-id.iam.gserviceaccount.com
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

**Important**: Make sure to:
- Copy `project_id` from service account JSON
- Copy `private_key` with proper escaping
- Copy `client_email` from service account

### Step 6: Setup Frontend Environment

Create `.env` file in `client/` folder:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

Get these values from your Firebase config object.

## 🗂️ Firestore Database Structure

The app automatically creates these collections:

### Users Collection
```
/users/{userId}
  - uid: string
  - username: string
  - email: string
  - rating: number (default 1200)
  - wins: number
  - losses: number
  - draws: number
  - createdAt: timestamp
```

### Games Collection
```
/games/{gameId}
  - id: string
  - whitePlayerId: string
  - whitePlayerName: string
  - whitePlayerRating: number
  - blackPlayerId: string (null if waiting)
  - blackPlayerName: string
  - blackPlayerRating: number
  - moves: array of objects
  - currentFEN: string
  - status: 'waiting' | 'active' | 'completed'
  - result: 'white-win' | 'black-win' | 'draw' | null
  - timeControl: 'bullet' | 'blitz' | 'rapid' | 'classic'
  - createdAt: timestamp
  - completedAt: timestamp
```

## 🔒 Firebase Security Rules

Set these in **Firestore Rules** tab:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Users can read/write their own document
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
    
    // Games - authenticated users can read all, create games
    match /games/{document=**} {
      allow read: if request.auth != null;
      allow create: if request.auth != null;
      allow update: if request.auth != null;
    }
  }
}
```

## 💻 Installation & Running

### Backend Setup
```bash
cd server
npm install

# Copy service account private key to .env
# Set all environment variables

npm run dev
# Server runs on http://localhost:5000
```

### Frontend Setup
```bash
cd client
npm install

# Set all Firebase config in .env file

npm start
# App opens at http://localhost:3000
```

## 🧪 Testing the Setup

1. **Register a new user** at `/register`
2. **Create a new game** - should appear in Firestore
3. **Check Firestore Console** - see your data appear in real-time
4. **Check Users collection** - see registered users
5. **Check Games collection** - see game records

## 📊 Free Tier Limits

Firebase free tier includes:
- **Firestore**: 1 GB storage, 50K reads/day
- **Auth**: Unlimited users (free)
- **Hosting**: 10 GB/month bandwidth

For a personal/testing chess app, this is **more than enough**.

## 🚀 Deploying to Production

### Deploy Frontend on Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase
cd client
firebase init hosting

# Build the app
npm run build

# Deploy
firebase deploy
```

### Deploy Backend on Heroku (Free Alternative)

```bash
# Install Heroku CLI
npm install -g heroku

# Create Heroku account and login
heroku login

# Create app
heroku create your-app-name

# Add environment variables
heroku config:set FIREBASE_PROJECT_ID=xxx
heroku config:set FIREBASE_PRIVATE_KEY=xxx
heroku config:set FIREBASE_CLIENT_EMAIL=xxx

# Deploy
git push heroku main
```

## ❓ Troubleshooting

### "Firebase is not initialized"
- Check `.env` file in client folder
- All variables must start with `REACT_APP_`
- Restart the React app after editing `.env`

### "Permission denied" in Firestore
- Update security rules (see above)
- Make sure user is authenticated
- Check user ID matches in rules

### "Invalid private key"
- Copy the entire private key including newlines
- In `.env`, replace newlines with `\n`
- Use quotes around the key: `FIREBASE_PRIVATE_KEY="..."`

### Authentication errors
- Verify email/password signup is enabled
- Check Firebase Auth security settings
- Ensure client Firebase config is correct

## 📚 Useful Resources

- [Firebase Console](https://console.firebase.google.com)
- [Firebase Web Setup](https://firebase.google.com/docs/web/setup)
- [Firestore Documentation](https://firebase.google.com/docs/firestore)
- [Firebase Auth](https://firebase.google.com/docs/auth)
- [Firebase CLI](https://firebase.google.com/docs/cli)

## ✅ Checklist

- [ ] Firebase project created
- [ ] Firestore database enabled
- [ ] Authentication (Email/Password) enabled
- [ ] Service account JSON downloaded
- [ ] Backend `.env` configured
- [ ] Frontend `.env` configured
- [ ] Backend running on port 5000
- [ ] Frontend running on port 3000
- [ ] Can register new users
- [ ] Can login with credentials
- [ ] Can create games
- [ ] Data appears in Firestore console

---

**Your free chess application is ready! 🎉**
