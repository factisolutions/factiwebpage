"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import CharacterCounter from "./character-counter"

interface FormFieldProps {
  id: string
  name: string
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  placeholder?: string
  required?: boolean
  className?: string
  validate?: (value: string) => { valid: boolean; message?: string }
  validateOnChange?: boolean
  rows?: number
  maxLength?: number
  minLength?: number
  showCharacterCount?: boolean
}

export default function FormField({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  className,
  validate,
  validateOnChange = false,
  rows = 4,
  maxLength,
  minLength,
  showCharacterCount = false,
}: FormFieldProps) {
  const [isFocused, setIsFocused] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const [validation, setValidation] = useState<{ valid: boolean; message?: string }>({ valid: true })

  // Run validation when value changes (if validateOnChange is true) or when field is touched
  useEffect(() => {
    if (validate && ((validateOnChange && value) || isTouched)) {
      setValidation(validate(value))
    }
  }, [value, validate, validateOnChange, isTouched])

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFocused(false)
    setIsTouched(true)
    if (onBlur) onBlur(e)
  }

  const isTextarea = type === "textarea"

  return (
    <div className={cn("mb-4", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="relative">
        {isTextarea ? (
          <motion.div
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <textarea
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholder}
                rows={rows}
                maxLength={maxLength}
                minLength={minLength}
                className={cn(
                  "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200",
                  validation.valid
                    ? value && isTouched
                      ? "border-green-500 focus:ring-green-500"
                      : "border-gray-300"
                    : "border-red-500 focus:ring-red-500",
                  className
                )}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholder}
                maxLength={maxLength}
                minLength={minLength}
                className={cn(
                  "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-200",
                  validation.valid
                    ? value && isTouched
                      ? "border-green-500 focus:ring-green-500"
                      : "border-gray-300"
                    : "border-red-500 focus:ring-red-500",
                  className
                )}
              />
            </div>
          </motion.div>
        )}

        {/* Validation icons */}
        <AnimatePresence>
          {value && isTouched && (
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
            >
              {validation.valid ? (
                <Check className="text-green-500" size={18} />
              ) : (
                <AlertCircle className="text-red-500" size={18} />
              )}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Error message */}
      <AnimatePresence>
        {!validation.valid && validation.message && (
          <div
            className="text-red-500 text-sm mt-1"
          >
            {validation.message}
          </div>
        )}
      </AnimatePresence>

      {/* Character counter for textareas */}
      {isTextarea && showCharacterCount && <CharacterCounter current={value.length} max={maxLength} min={minLength} />}
    </div>
  )
}
