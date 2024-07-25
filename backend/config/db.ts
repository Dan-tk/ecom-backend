import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const mongoUri = process.env.MONGO_URI;
    
    if (!mongoUri) {
      throw new Error('MONGO_URI is not defined');
    }

    await mongoose.connect(mongoUri);
    console.log('Successfully connected to MongoDB 👍');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`ERROR: ${error.message}`);
    } else {
      console.error('ERROR: An unknown error occurred');
    }
    process.exit(1);
  }
};

export default connectDB;
