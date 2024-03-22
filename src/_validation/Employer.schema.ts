import {z} from 'zod';

export const EmployerSchema = z.object({
            nameOfCompany: z.string().nonempty(),
            noepwd: z.string(),
        });