"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

interface FeatureItemProps {
  text: string
}

export default function FeatureItem({ text }: FeatureItemProps) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-brand-blue bg-opacity-10 rounded-lg mr-4">
            <Check size={18} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{text}</h3>
        </div>
      </div>
    </motion.div>
  )
}
