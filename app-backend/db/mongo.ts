import { MongoClient } from "mongodb";
import config from "../config/config";
 
export  function connectToMongoDB() {
    const client = new MongoClient(`mongodb://${config.db_user_mongodb}:${config.db_password_mongodb}@${config.db_host_mongodb}:${config.db_port_mongodb}/${config.db_name_mongodb}?authSource=admin`);
    try {
        client.connect();
        const db = client.db(config.db_name_mongodb);
        return { client, db };
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        throw error;
    }
}

export const { client, db } = connectToMongoDB();
