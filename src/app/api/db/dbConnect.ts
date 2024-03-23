import mongoose, { ConnectOptions } from "mongoose";

export const dbConnection = async () => {
  try {
    console.log(process.env.CONNECTION_URI)
    if (!process.env.CONNECTION_URI) {
      throw new Error('CONNECTION_URI is not defined');
    }
    const conn = await mongoose.connect(
      process.env.CONNECTION_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    console.log(`MongoDB Connected: ${conn.connection.name}`);
  } catch (error: any) {
    console.log(error.message);
  }
};