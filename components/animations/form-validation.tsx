"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Check, X } from "lucide-react"

interface FormValidationProps {
  isValid: boolean
  message?: string
  showIcon?: boolean
}

export default function FormValidation({ isValid, message, showIcon = true }: FormValidationProps) {
  return (
    <div className="mt-1">
      <AnimatePresence>
        {message && (
          <div className={`flex items-start ${isValid ? "text-green-600" : "text-red-500"}`}>
            {showIcon && (
              <div className="mr-1 mt-0.5 flex-shrink-0">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-sm">
                    {isValid ? <Check size={14} /> : <X size={14} />}
                  </span>
                </motion.div>
              </div>
            )}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="text-sm">
                {message}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
