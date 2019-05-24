const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const path = require('path');



const app= express();
//body-parser: convert to and from JSON
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI
// Connect to Mongoose(mongo)
mongoose.connect(db ,{useNewUrlParser: true})
.then(() => console.log("MongoDB Connected"))
.catch(err=> console.log(err));


// Routes
app.use('/api/items', items);


// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server start on port ${port}`));