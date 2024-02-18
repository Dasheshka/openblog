import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const readingTime = (body: string) => {
  const words = body.match(/\w+/g);

  return words ? `${Math.ceil(words.length / 150)} min read` : "";
};

export const sluglify = (text: string) => text.replace(/\s+/g, "-");

export const unsluglify = (text: string) => text.replace(/-/g, " ");

export { filterPostsByCategory, getCategories, getPostByTag, getPosts, getTags } from "./post";
