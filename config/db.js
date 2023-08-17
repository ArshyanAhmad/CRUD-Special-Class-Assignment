import mongoose from "mongoose";

const connectToDatabase = async () => {
    mongoose.connect(process.env.MONGO_URL)
        .then((con) => {
            console.log(`Database connected successfully: ${con}`);
        })
        .catch((err) => console.log(`Error while connecting to database: ${err}`));
}

export default connectToDatabase;




