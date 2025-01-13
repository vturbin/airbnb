"use server";

import { profileSchema } from "./schemas";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    console.log(validatedFields);
    return { message: "Profile Created" };
  } catch (error) {
    console.log(error);
    return { message: "there was a problem" };
  }
};