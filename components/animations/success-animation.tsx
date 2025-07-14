"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import Confetti from "./confetti"
import { Button } from "../ui/button"

interface SuccessAnimationProps {
  message?: string
  onReset?: () => void
}

export default function SuccessAnimation({
  message = "Mensagem enviada com sucesso!",
  onReset,
}: SuccessAnimationProps) {
  return (
    <div className="relative">
      {/* Confetti animation */}
      <Confetti />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="bg-white rounded-lg p-8 shadow-lg text-center relative overflow-hidden">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3, repeat: 2 }}
              >
                <div className="absolute inset-0 rounded-full border-4 border-green-500" />
              </motion.div>
              <Check className="w-12 h-12 text-green-500" size={48} strokeWidth={3} />
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <div className="text-2xl font-bold mb-2 text-gray-800">
              Sucesso!
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="text-gray-600 mb-6">
              {message}
            </div>
          </motion.div>

          {/* Action Button */}
          {onReset && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Button onClick={onReset} variant="outline" className="w-full mt-4">
                Enviar outra mensagem
              </Button>
            </motion.div>
          )}

          {/* Decorative Elements */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-brand-teal to-brand-blue rounded-full opacity-10" />
          </motion.div>

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          >
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-brand-blue to-brand-teal rounded-full opacity-10" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
