import { ObjectId } from "mongodb";

interface UserMongo {
  _id: ObjectId;
  username: string;
  email: string;
  password_hash: string;
  is_deleted: boolean;
  created_at: Date;
}

export type { UserMongo };