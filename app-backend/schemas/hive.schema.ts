import {z} from "zod";

const HiveSchema = z.object({
    id: z.uuid(),
    apiary_id: z.uuid(),
    name: z.string().min(1).max(100),
    is_deleted: z.boolean(),
    created_at: z.date()
});

export type Hive = z.infer<typeof HiveSchema>;
export { HiveSchema };