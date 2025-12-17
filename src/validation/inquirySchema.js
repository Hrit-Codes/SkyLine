import {z} from "zod";

const fullname=z.string().trim().min(3,"Full name must be at least 3 characters long").max(20,"Full name cannot exceed 20 characters");

const email=z.string().trim().email("Invalid email format");

phoneno = z.string().trim()
  .regex(/^[0-9]+$/, "Phone number must contain only digits.") 
  .min(10, "Phone number must be at least 10 digits")
  .max(15, "Phone number cannot exceed 15 characters");

const address=z.string().trim().min(2,"Address must be at least 2 characters long").max(40,"Address cannot exceed 40 characters");

const message=z.string().trim().min(10,"Minimum of 10 characters is required").max(100,"Message cannot exceed 100 characters");

export const inquirySchema=z.object({
    fullname,
    email,
    phoneno,
    address,
    message,
})