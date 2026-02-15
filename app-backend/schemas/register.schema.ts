import {z} from "zod";

export const registerSchema = z.object({
    email: z.email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    nickname: z.string().min(3, { message: "Nickname must be at least 3 characters long" }),
});

export type RegisterRequest = z.infer<typeof registerSchema>;