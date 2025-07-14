import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility type for motion components to fix TypeScript conflicts
export type MotionComponentProps = {
  className?: string
  children?: React.ReactNode
  [key: string]: any
}
