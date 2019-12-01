const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv/config'); 

app.use(bodyParser.json()); 

// Import Route

const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');

app.use('/posts', postsRoute);
app.use('/users', usersRoute);

// ROUTES

// app.use(auth);

// app.use('/post', (req, res) => {
//     console.log('This is the middleware');
// });

app.get('/', (req, res) => {
    res.send('We are on home now');
});



// connect to DB

mongoose.connect(
    process.env.DB_CONNECTION,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
     },
     () => console.log('Successfully connected to MongoDB Atlas!')
);
  
app.listen(3000); 