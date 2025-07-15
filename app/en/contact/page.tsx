import Link from "next/link"
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react"
import ResponsiveLogo from "@/components/responsive-logo"
import LanguageSelector from "@/components/language-selector"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ScrollReveal from "@/components/animations/scroll-reveal"
import FadeIn from "@/components/animations/fade-in"

export const metadata = {
  title: "Contact Us | FACTI Solutions - Get in Touch for AI Solutions",
  description:
    "Get in touch with FACTI Solutions for AI governance, digital transformation, and intelligent automation solutions. Free consultation available.",
  keywords: "Contact FACTI Solutions, AI Consulting, Digital Transformation, Free Assessment, AI Governance",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <header className="bg-[#2A2A2A]/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <ResponsiveLogo
            mobileVariant="text"
            tabletVariant="full"
            desktopVariant="full"
            mobileSize="sm"
            tabletSize="md"
            desktopSize="md"
            theme="auto"
          />

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/en#services"
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/en#methodology"
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors"
            >
              Methodology
            </Link>
            <Link
              href="/en/about"
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/en#resources"
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors"
            >
              Resources
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector currentLang="en" />
            <Button href="#contact" variant="default" size="sm" className="hidden md:inline-flex">
              Free Assessment
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                  Let's <span className="text-gradient bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                    Transform
                  </span> Your Business
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                  Ready to accelerate your business with AI? Get in touch for a free assessment and discover 
                  how we can help you achieve your digital transformation goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button href="#contact" variant="default" size="lg" className="group">
                    Get Free Assessment
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button href="#contact-info" variant="secondary" size="lg">
                    Contact Information
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-brand-blue/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <MessageSquare className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Free Consultation</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Quick Response</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Multiple Channels</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Direct Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Get Your Free Assessment
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you within 24 hours with a personalized assessment
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose FACTI Solutions?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver results that matter
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">15+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Years of Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Over 15 years of experience in AI, data governance, and digital transformation
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">150+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Projects Delivered</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Successfully delivered over 150 projects across various industries and company sizes
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl">98%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Client Satisfaction</h3>
              <p className="text-gray-600 dark:text-gray-300">
                98% client satisfaction rate with measurable ROI and business impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-teal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't wait to transform your business. Contact us today and take the first step towards AI-powered growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#contact" variant="secondary" size="lg">
                Get Started Now
              </Button>
              <Button href="/en/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-blue">
                Learn More
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}