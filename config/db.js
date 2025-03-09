const mongoose = require('mongoose');

const connectDB = async (retries = 5, delay = 5000) => {
  while (retries > 0) {
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        family: 4, // Force IPv4
      });

      console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
      
      // Handle graceful shutdown
      process.on('SIGINT', async () => {
        console.log("\n🛑 Closing MongoDB connection...");
        await mongoose.connection.close();
        process.exit(0);
      });

      return conn;
    } catch (error) {
      console.error(`❌ MongoDB connection failed: ${error.message}`);

      retries -= 1;
      if (retries === 0) {
        console.error("🚨 Max retries reached. Exiting...");
        process.exit(1);
      }

      console.log(`🔄 Retrying in ${delay / 1000} seconds...`);
      await new Promise(res => setTimeout(res, delay));
    }
  }
};

module.exports = connectDB;
