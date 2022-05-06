const { connect } = require('mongoose')

const URI = "mongodb+srv://ShifaSamreen:gDa3UenFJHDva84H@cluster0.9rmy2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

connect(URI)
    .then(conn => console.log("MongoDB Connected...."))
    .catch(console.log)