const mongoose = require('mongoose');
const {db} = require('../configuration');

module.exports.connectDb = async () => {
    const mongoUri = db;

    console.log('Attempting to connect to MongoDB...');
    console.log('MongoDB URI:', mongoUri);

    try {
        await mongoose.connect(mongoUri);
        console.log('✅ Successfully connected to MongoDB');
        return mongoose.connection;
    } catch (error) {
        console.error('❌ Failed to connect to MongoDB:', error.message);
        throw error;
    }
}
