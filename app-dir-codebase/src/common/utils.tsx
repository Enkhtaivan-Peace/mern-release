import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function displayJson(jsonData: any) {
  return <pre>{JSON.stringify(jsonData, null, 2)}</pre>;
}
