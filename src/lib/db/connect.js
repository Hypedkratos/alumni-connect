import mongoose from "mongoose";
export default async function connectToDatabase(){
    try {
        mongoose.connect(process.env.MONGODB_URL);
        const connections = mongoose.connection;
        connections.on("connected",()=>{
            console.log("Connected Successfully");
        })
        connections.on("error",()=>{
            console.log("Error to connect");
            process.exit();
        })
    } catch (error) {
        console.log("Error",error);

    }
}