import mongoose from 'mongoose'

const isConnected:boolean = false;

export const connectionToDb = async () => {
    mongoose.set('strictQuery',true);

    if(!process.env.MONGODB_URL){
        return console.log("Mongodb url missing")
    }

    if(isConnected){
        return console.log('MongoDb already connected')
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDb conneted successfully')
    } catch (error) {
        console.log('Failed to connect')
        return error
    }
}