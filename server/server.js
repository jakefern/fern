const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { auth } = require('firebase-admin');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('../config/fern-account-firebase-key.json'); // Update with your service account key path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Login route
app.post('/api/login', async (req, res) => {
  const { idToken } = req.body;

  try {
    const decodedToken = await auth().verifyIdToken(idToken);
    res.json({ uid: decodedToken.uid, email: decodedToken.email });
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
