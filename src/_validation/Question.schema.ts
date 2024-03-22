import {z} from 'zod';

export const QuesitonSchema = z.object({
            questionText: z.string().nonempty(),
            answer: z.string(),
            section: z.string(),
            entity : z.string(),
        });