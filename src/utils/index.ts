import { ui } from "@/t/ui";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const sluglify = (text: string) => text.replace(/\s+/g, "-");

export const unsluglify = (text: string) => text.replace(/-/g, " ");

export const t = (key: keyof typeof ui) => {
  return ui[key];
};

export const getReadingTime = (body: string) => {
  const words = body.match(/\w+/g);
  return words ? `${Math.ceil(words.length / 150)}` : "1";
};

export const useDetails = (details: HTMLDetailsElement | null) => {
  document.addEventListener("click", (e) => {
    if (details && e.target !== details && details.open) {
      details.open = false;
    }
  });

  return details;
};

export const useDialog = (dialogId: string, triggerId: string) => {
  const dialog = document.getElementById(dialogId) as HTMLDialogElement;
  const dialogTrigger = document.getElementById(triggerId);

  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });

  document.addEventListener("astro:before-swap", () => dialog.close());

  dialogTrigger?.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.showModal();
  });

  return dialog;
};
