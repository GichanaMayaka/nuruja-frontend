import { date, number, object, string } from "zod";

export const membersSchema = object({
  username: string().nonempty("Name is Required").min(2),
  email: string().email("Not a valid Email address"),
  phoneNumber: number().int("Whole Numbers only").min(1),
  address: string().nonempty("Address is Required").min(2),
});

export const bookSchema = object({
  title: string().nonempty("Title is required").min(2),
  author: string().nonempty("Author name is required").min(2),
  isbn: number()
    .int("Whole numbers only")
    .nonnegative("Positive numbers only")
    .min(1),
  rentStatus: string().min(6),
  dateOfPublication: date(),
  rentFee: number().nonnegative("Positive numbers only").min(1),
  latePenaltyFee: number().nonnegative("Positive numbers only").min(1),
});
