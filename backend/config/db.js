import mongoose from 'mongoose';

/**
 * Connect to MongoDB database instance
 */
export const connectDB = async () => {
  const uri = process.env.MONGODB_URI || 'mongodb+srv://ci268080_db_user:znaWyTU1ixsyTxgs@ali.uka9oct.mongodb.net/';
  try {
    const conn = await mongoose.connect(uri);
    console.log(`[MongoDB] Connected successfully to host: ${conn.connection.host} (DB: ${conn.connection.name})`);
    return conn;
  } catch (error) {
    console.error(`[MongoDB Connection Error] ${error.message}`);
    // Allow application to proceed in fallback mode if running demo
    if (process.env.NODE_ENV === 'production' && !uri.includes('localhost')) {
      process.exit(1);
    }
    return null;
  }
};
