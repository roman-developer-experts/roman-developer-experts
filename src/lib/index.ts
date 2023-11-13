import { z } from 'zod';

export type TSchema = z.infer<typeof schema>;
export const schema = z.object({
  name: z.string().min(3, 'Please enter your fullname'),
  email: z.string().email('Email is invalid!'),
  company: z.string().min(2, 'Please write company name'),
  subject: z.string().min(2, 'Please write subject'),
  message: z.string().min(3, 'Please leave your message here!'),
});
