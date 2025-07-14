"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import ScrollReveal from "./animations/scroll-reveal"
import React from "react"
import { Linkedin, Instagram, Mail } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const socialLinks: { name: string; href: string; icon: LucideIcon }[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/facti.solutions",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "mailto:contactus@facti.solutions",
    icon: Mail,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/facti-solutions",
    icon: Linkedin,
  },
] as const

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <ScrollReveal>
              <Link href="/" className="block transition-transform hover:scale-105 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="font-raleway font-semibold text-lg text-white tracking-wider">
                    <span className="inline-block">FACTI</span>
                    <span className="inline-block ml-2 bg-gradient-to-r from-brand-teal to-brand-blue bg-clip-text text-transparent">
                      SOLUTIONS
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>

            <p className="text-gray-300 mb-6 max-w-md">
              Transformando negócios com IA responsável. Especialistas em governança, segurança e automação inteligente.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-gray-400 hover:text-brand-teal transition-colors p-2 rounded-md hover:bg-gray-800">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      {social.icon && typeof social.icon === 'function' ? (
                        React.createElement(social.icon, { className: "w-5 h-5" })
                      ) : null}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <nav aria-label="Serviços">
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#services" className="hover:text-brand-teal transition-colors">
                    Estratégia de IA
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-brand-teal transition-colors">
                    Automação
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-brand-teal transition-colors">
                    Analytics
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-brand-teal transition-colors">
                    Treinamento
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <nav aria-label="Empresa">
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#about" className="hover:text-brand-teal transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#methodology" className="hover:text-brand-teal transition-colors">
                    Metodologia
                  </a>
                </li>
                <li>
                  <a href="#resources" className="hover:text-brand-teal transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-brand-teal transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <address className="space-y-2 text-gray-300 not-italic">
              <p>
                <a href="mailto:contactus@facti.solutions" className="hover:text-brand-teal transition-colors">
                  contactus@facti.solutions
                </a>
              </p>
              <p>
                <a href="tel:+551151966199" className="hover:text-brand-teal transition-colors">
                  +55 11 5196-6199
                </a>
              </p>
              <p>São Paulo, Brasil</p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <div>
            <p>&copy; {currentYear} FACTI Solutions. Todos os direitos reservados.</p>
            <p className="mt-1">CNPJ: 00.000.000/0001-00</p>
          </div>
          <nav aria-label="Links legais" className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-teal transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-brand-teal transition-colors">
              Termos de Uso
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
