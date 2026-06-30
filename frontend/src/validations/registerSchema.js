import { z } from "zod";

const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(3, "Full name is required"),

    email: z
      .string()
      .email("Please enter a valid email"),

    password: z
      .string()
      .min(6, "Password must contain at least 6 characters"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export default registerSchema;