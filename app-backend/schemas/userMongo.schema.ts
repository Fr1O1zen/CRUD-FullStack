import { ObjectId } from "mongodb";
import {z} from "zod";

const UserSchemaMongo = z.object({
    _id: z.instanceof(ObjectId),
    username: z.string().min(3).max(30),
    email: z.email(),
    password_hash: z.string().min(60).max(60),
    is_deleted: z.boolean(),
    created_at: z.date()
});

export type UserMongo = z.infer<typeof UserSchemaMongo>;
export { UserSchemaMongo };