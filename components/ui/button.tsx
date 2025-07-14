"use client"

import React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion, type MotionProps } from "framer-motion"
import { Slot } from "@radix-ui/react-slot"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-brand-teal to-brand-blue text-white hover:shadow-md hover:scale-[1.02] focus:ring-brand-blue",
        secondary:
          "bg-white text-brand-blue border border-brand-blue hover:bg-blue-50 focus:ring-brand-blue hover:shadow-md",
        dark: "bg-brand-navy text-white hover:bg-opacity-90 focus:ring-brand-navy hover:shadow-md",
        outline: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-700 shadow-none",
        link: "bg-transparent text-brand-blue underline-offset-4 hover:underline shadow-none p-0 h-auto",
        gradient:
          "bg-gradient-to-r from-brand-teal to-brand-blue btn-gradient-animate text-white hover:shadow-md hover:scale-[1.02] focus:ring-brand-blue",
        animated:
          "bg-gradient-to-r from-brand-teal to-brand-blue btn-gradient-animate text-white hover:shadow-lg hover:scale-[1.05] focus:ring-brand-blue relative overflow-hidden",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof MotionProps>,
    VariantProps<typeof buttonVariants> {
  href?: string
  fullWidth?: boolean
  whileHover?: MotionProps["whileHover"]
  whileTap?: MotionProps["whileTap"]
  children?: React.ReactNode
  asChild?: boolean
  initial?: MotionProps["initial"]
  animate?: MotionProps["animate"]
  exit?: MotionProps["exit"]
  transition?: MotionProps["transition"]
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, href, children, whileHover, whileTap, asChild, initial, animate, exit, transition }, ref) => {
    const Component = asChild ? Slot : "button"
    const motionProps = {
      whileHover,
      whileTap,
      initial,
      animate,
      exit,
      transition,
    }

    if (href) {
      const isExternal = href.startsWith("http")
      return (
        <motion.div {...motionProps}>
          <Link
            href={href}
            className={cn(buttonVariants({ variant, size, fullWidth, className }))}
            {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
          >
            <span className="relative z-10">{children}</span>
          </Link>
        </motion.div>
      )
    }

    return (
      <motion.div {...motionProps}>
        <Component
          className={cn(buttonVariants({ variant, size, fullWidth, className }))}
          ref={ref}
        >
          <span className="relative z-10">{children}</span>
        </Component>
      </motion.div>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
