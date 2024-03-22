import {z} from 'zod';

export const TeacherSchema = z.object({
            academicYear: z.string().nonempty(),
            name: z.string(),
            branch: z.string()
        });