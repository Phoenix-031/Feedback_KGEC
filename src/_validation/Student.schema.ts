import {z} from 'zod';

export const StudentSchema = z.object({
            rollNo: z.string().nonempty(),
            department: z.string(),
            yearOfStudy: z.string()
        });