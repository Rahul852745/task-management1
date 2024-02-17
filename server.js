// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./backend/routes/taskRoutes');

const app = express();
const PORT = 2000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
