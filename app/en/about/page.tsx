import Link from "next/link"
import Image from "next/image"
import { CheckCircle, Users, Award, Clock, Briefcase, Brain, Shield, TrendingUp } from "lucide-react"
import ResponsiveLogo from "@/components/responsive-logo"
import LanguageSelector from "@/components/language-selector"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/animations/scroll-reveal"
import FadeIn from "@/components/animations/fade-in"

export const metadata = {
  title: "About Us | FACTI Solutions - AI Governance and Digital Transformation",
  description:
    "Learn about FACTI Solutions and our mission to transform data into actionable insights for businesses of all sizes through AI governance and digital transformation.",
  keywords: "About FACTI Solutions, AI Governance, Digital Transformation, Data Analytics, IT Consulting",
}

export default function AboutPage() {
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
              className="text-brand-blue font-medium"
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
            <Button href="/en/contact" variant="default" size="sm" className="hidden md:inline-flex">
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
                  About <span className="text-gradient bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                    FACTI Solutions
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                  We are specialists in AI governance, intelligent automation, and digital transformation. 
                  Our mission is to help companies leverage artificial intelligence responsibly and effectively.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button href="/en/contact" variant="default" size="lg">
                    Get in Touch
                  </Button>
                  <Button href="/en/services" variant="secondary" size="lg">
                    Our Services
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
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Expert Team</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Proven Results</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">15+ Years</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">150+ Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                To democratize access to artificial intelligence, making it accessible, secure, and beneficial for businesses of all sizes
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">AI Democratization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Making artificial intelligence accessible to companies of all sizes, not just large corporations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Responsible AI</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ensuring that AI implementations are ethical, secure, and compliant with regulations
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Sustainable Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Helping businesses grow sustainably through intelligent automation and data-driven decisions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work and relationships with clients
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in every project, delivering the highest quality solutions",
                icon: Award,
              },
              {
                title: "Innovation",
                description: "We stay at the forefront of technology to provide cutting-edge solutions",
                icon: Brain,
              },
              {
                title: "Integrity",
                description: "We maintain the highest ethical standards in all our business relationships",
                icon: Shield,
              },
              {
                title: "Partnership",
                description: "We work as true partners with our clients, sharing in their success",
                icon: Users,
              },
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-teal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already accelerated their digital transformation with our specialized solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/en/contact" variant="secondary" size="lg">
                Get Free Assessment
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