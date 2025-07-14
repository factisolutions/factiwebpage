"use client"

import { Mail, Phone, MapPin, Instagram, Linkedin, PhoneIcon as WhatsApp } from "lucide-react"
import ScrollReveal from "./animations/scroll-reveal"
import { motion } from "framer-motion"

export default function ContactInfo() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <ScrollReveal>
        <h2 className="text-2xl font-bold mb-2">Informações de Contato</h2>
        <p className="text-gray-600 mb-6">Você também pode entrar em contato conosco através dos seguintes canais:</p>
      </ScrollReveal>

      <div className="space-y-6">
        <ScrollReveal direction="left" delay={0.1}>
          <div className="flex items-start space-x-4">
            <motion.div
              whileHover={{ scale: 1.1, backgroundColor: "#0056b3", color: "white" }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <Mail className="w-6 h-6" />
              </div>
            </motion.div>
            <div>
              <h4 className="font-bold text-lg">Email</h4>
              <p className="text-gray-600">contactus@facti.solutions</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.2}>
          <div className="flex items-start space-x-4">
            <motion.div
              whileHover={{ scale: 1.1, backgroundColor: "#0056b3", color: "white" }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <Phone className="w-6 h-6" />
              </div>
            </motion.div>
            <div>
              <h4 className="font-bold text-lg">WhatsApp</h4>
              <p className="text-gray-600">+55 11 5196-6199</p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left" delay={0.3}>
          <div className="flex items-start space-x-4">
            <motion.div
              whileHover={{ scale: 1.1, backgroundColor: "#0056b3", color: "white" }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <MapPin className="w-6 h-6" />
              </div>
            </motion.div>
            <div>
              <h4 className="font-bold text-lg">Localização</h4>
              <p className="text-gray-600">Brasil</p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="up" delay={0.4}>
        <div className="mt-8 flex space-x-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-[#0077B5] p-3 rounded-full text-white hover:bg-opacity-90 transition-colors">
              <Linkedin className="w-6 h-6" />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-[#4267B2] p-3 rounded-full text-white hover:bg-opacity-90 transition-colors">
              <WhatsApp className="w-6 h-6" />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-[#E1306C] p-3 rounded-full text-white hover:bg-opacity-90 transition-colors">
              <Instagram className="w-6 h-6" />
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="bg-[#EA4335] p-3 rounded-full text-white hover:bg-opacity-90 transition-colors">
              <Mail className="w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </ScrollReveal>
    </div>
  )
}
