const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://dinesh:dinesh@inotebook.3jkhg.mongodb.net/inotebook?retryWrites=true&w=majority&appName=inotebook"

const connectToMongo = () => {
     mongoose.connect(mongoURI, {
    })
    console.log("Connected");
}

module.exports = connectToMongo;