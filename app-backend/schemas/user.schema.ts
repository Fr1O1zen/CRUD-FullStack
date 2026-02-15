import {z} from "zod";

const UserSchema = z.object({
    id: z.uuid(),
    username: z.string().min(3).max(30),
    email: z.email(),
    password_hash: z.string().min(60).max(60),
    is_deleted: z.boolean(),
    created_at: z.date()
});

export type User = z.infer<typeof UserSchema>;
export { UserSchema };