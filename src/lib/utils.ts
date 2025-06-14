import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes with clsx
 * Used throughout the application for conditional styling
 * Prevents class conflicts and ensures proper CSS precedence
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}