const express = require("express");
const {connectDb} = require("./helpers/db");
const mongoose = require("mongoose");
const app = express();
const { port, host, db } = require("./configuration");

const postSchema = new mongoose.Schema({
    name: String
});
const Post = mongoose.model('Post', postSchema);

const startServer = () => {
    app.listen(port, async ()=> {
        console.log(`Server is running on port - ${port}`);
        console.log(`On host is ${host}`);
        console.log(`Our database : ${db}`);

        // const posts = await Post.find();
        // console.log('posts=find==>>>', posts);

        const silence = new Post({ name: 'Silence' });
        await silence.save();
        console.log('new Post schema====-=with nodemon=>>>', silence.name); // 'Silence'
    })
}
console.log('trololo')
app.get('/test', (req, res)=> {
 res.send('Our api server is working correctly');
});



// Initialize database connection
const initializeApp = async () => {
    try {
        console.log('Initializing application...');
        const connection = await connectDb();

        // Set up connection event listeners
        connection.on("error", (error) => {
            console.error('Database connection error:', error);
        });

        connection.on("disconnect", () => {
            console.log('Database disconnected');
        });

        // Start the server
        startServer();

    } catch (error) {
        console.error('Failed to initialize application:', error);
        process.exit(1);
    }
};

// Start the application
void initializeApp();
