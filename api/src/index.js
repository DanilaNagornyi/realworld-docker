const express = require("express");
const {connectDb} = require("./helpers/db");
const mongoose = require("mongoose");
const axios = require("axios");
const app = express();
const { port, host, db, authApiUrl } = require("./configuration");
const {response} = require("express");

const postSchema = new mongoose.Schema({
    name: String
});
const Post = mongoose.model('Post', postSchema);

const startServer = () => {
    app.listen(port, async ()=> {
        console.log(`Server is running on port - ${port}`);
        console.log(`On host is ${host}`);
        console.log(`Our database : ${db}`);

        const silence = new Post({ name: 'Silence' });
        await silence.save();
        console.log('new Post schema====-=with nodemon=>>>', silence.name); // 'Silence'
    })
}
app.get('/test', (req, res)=> {
 res.send('Our api server is working correctly');
});

app.get('/testwithcurrentuser', (req, res)=> {
    axios.get(authApiUrl + '/currentUser').then(response => {
        res.json({
            testwithcurrentuser: true,
            currentUser: response.data
        })
    })
})



const initializeApp = async () => {
    try {
        console.log('Initializing application...');
        const connection = await connectDb();

        connection.on("error", (error) => {
            console.error('Database connection error:', error);
        });

        connection.on("disconnect", () => {
            console.log('Database disconnected');
        });

        startServer();

    } catch (error) {
        console.error('Failed to initialize application:', error);
        process.exit(1);
    }
};

void initializeApp();
