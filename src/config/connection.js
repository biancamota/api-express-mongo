import mongoose from "mongoose";

async function connectionDb() {
    mongoose.connect(process.env.MONGO_URI);

    return mongoose.connection;
}

export default connectionDb;