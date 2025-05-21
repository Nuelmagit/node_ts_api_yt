import mongoose from 'mongoose';

export const connectToDatabase = async (connectionString: string): Promise<undefined> => {
    await mongoose.connect(connectionString)
    console.log("MNONGO DB CONNECTION SUCCESSFUL");
}

export const disconnectFromDatabase = () => mongoose.disconnect();
