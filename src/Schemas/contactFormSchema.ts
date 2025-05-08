import { z } from "zod";

export const contactFormSchema = z.object({
  username: z.string().nonempty("Mező kitöltése kötelező").min(1, "Minimum 1 karakter"),
  email: z.string().nonempty("Mező kitöltése kötelező").email("Hibás email cím"),
  note: z.string().nonempty("Mező kitöltése kötelező").min(1, "Minimum 1 karakter"),
});
