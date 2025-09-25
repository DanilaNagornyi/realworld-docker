const express = require("express");
const {connectDb} = require("./helpers/db");
const app = express();
const { port, host, db } = require("./configuration");

const startServer = () => {
    app.listen(port,()=> {
        console.log(`Auth service is running on port - ${port}`);
        console.log(`On host is ${host}`);
        console.log(`Our database : ${db}`);

    })
}
app.get('/test', (req, res)=> {
 res.send('Our auth server is working correctly');
});

app.get("/api/currentUser", (req, res)=> {
    res.json({
        id: '1234',
        email: "foo@gmail.com"
    })
})


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
