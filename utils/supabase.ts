import { createClient } from "@supabase/supabase-js";
import { randomUUID } from "crypto";

const bucket = "temp-home-away";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

export const uploadImage = async (image: File) => {
  const newName = `${randomUUID()}-${image.name}`;

  const { data } = await supabase.storage.from(bucket).upload(newName, image, {
    cacheControl: "3600",
  });
  if (!data) throw new Error("Image upload failed");
  return supabase.storage.from(bucket).getPublicUrl(newName).data.publicUrl;
};
