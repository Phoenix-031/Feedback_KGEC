import {z} from 'zod';

export const AlumniSchema = z.object({
            branch: z.string().nonempty(),
            batch: z.string(),
            name: z.string()
        });