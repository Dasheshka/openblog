import { CATEGORIES } from "@/data/sets";
import { ui } from "@/t/ui";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const sluglify = (text: string) => text.replace(/\s+/g, "-");

export const unsluglify = (text: string) => text.replace(/-/g, " ");

export const getCategoryLabel = (value: string) => {
  return CATEGORIES.find((category) => category.value === value)?.label;
};

export const getReadingTime = (body: string) => {
  const words = body.match(/\w+/g);
  return words ? `${Math.ceil(words.length / 150)}` : "1";
};

export const t = (key: keyof typeof ui) => {
  return ui[key];
};
