import {z} from 'zod';

export const ParentSchema = z.object({
            education: z.string().nonempty(),
            occupation: z.string(),
            relationship: z.string(),
            name : z.string(),
            studentName : z.string()
        });