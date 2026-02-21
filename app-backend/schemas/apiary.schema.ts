import {z} from "zod";

const ApiarySchema = z.object({
    id: z.uuid(),
    owner_id: z.uuid(),
    name: z.string().min(1).max(100),
    is_deleted: z.boolean(),
    created_at: z.date()
});

export type Apiary = z.infer<typeof ApiarySchema>;
export { ApiarySchema };