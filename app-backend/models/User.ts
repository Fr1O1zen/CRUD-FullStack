import { ObjectId } from "mongodb";
export interface User {
    _id: ObjectId;
    username: string;
    email: string;
    password_hash: string;
    is_deleted: boolean;
    created_at: Date;
}