// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./backend/routes/taskRoutes');
const session = require('express-session');

const app = express();
const PORT = 2000;


// Session Setup 
app.use(session({

    // It holds the secret key for session 
    secret: 'Your_Secret_Key',

    // Forces the session to be saved 
    // back to the session store 
    resave: true,

    // Forces a session that is "uninitialized" 
    // to be saved to the store 
    saveUninitialized: true
}))

app.use(bodyParser.json());
app.use(cors());

app.use('/api', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
