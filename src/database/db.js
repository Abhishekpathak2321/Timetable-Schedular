import mongoose from 'mongoose';
import { DB_NAME } from '../cosntant';

const connectDB = async () =>{
    try {
    await mongoose.connect(`{process.env.MONGO_URI}/${DB_NAME}`)
    }
    catch (error){
        console.error(error.message,"Database connection is failed");
        process.exit(1);
    }
}
export default connectDB;