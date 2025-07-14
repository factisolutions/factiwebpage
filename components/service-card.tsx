"use client"

import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "./ui/button"

interface ServiceCardProps {
  icon?: LucideIcon
  title: string
  description: string
  link?: string
  linkText?: string
  imageSrc?: string
}

export default function ServiceCard({ icon: Icon, title, description, link, linkText, imageSrc }: ServiceCardProps) {
  const hasValidImage = typeof imageSrc === "string" && imageSrc.trim() !== ""

  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col transition-shadow duration-300 hover:shadow-lg">
      {hasValidImage ? (
        <div className="relative h-48 mb-4 rounded-md overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={`${title} service illustration`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </div>
      ) : Icon ? (
        <div className="text-brand-blue mb-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-hidden="true"
          >
            <Icon size={48} />
          </motion.div>
        </div>
      ) : null}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="text-xl font-bold mb-3">
          {title}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-gray-600 mb-6 flex-grow">
          {description}
        </div>
      </motion.div>

      {link && linkText && (
        <div className="mt-auto self-start">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button href={link} variant="dark" size="sm">
              {linkText}
            </Button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
