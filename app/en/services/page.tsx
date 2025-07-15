import Link from "next/link"
import Image from "next/image"
import { Brain, Cog, BarChart3, Users, Database, Shield, ArrowRight, CheckCircle, Zap, TrendingUp, Settings, Target } from "lucide-react"
import ResponsiveLogo from "@/components/responsive-logo"
import LanguageSelector from "@/components/language-selector"
import { Button } from "@/components/ui/button"
import ScrollReveal from "@/components/animations/scroll-reveal"
import FadeIn from "@/components/animations/fade-in"

export const metadata = {
  title: "Our Services | FACTI Solutions - AI Governance and Digital Transformation",
  description:
    "Complete AI solutions focused on governance, security and measurable results. Specialized consulting in AI strategy, automation, and data governance.",
  keywords: "AI Services, Digital Transformation, Process Automation, Data Governance, AI Strategy, RPA, ChatGPT Integration",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <ResponsiveLogo
            mobileVariant="text"
            tabletVariant="text"
            desktopVariant="text"
            mobileSize="sm"
            tabletSize="md"
            desktopSize="md"
            theme="auto"
          />

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/en#services"
              className="text-brand-blue font-medium"
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
                  Our <span className="text-gradient bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                    Specialized Services
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                  Complete AI solutions focused on governance, security and measurable results. 
                  We help companies transform their processes with responsible artificial intelligence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button href="/en/contact" variant="default" size="lg" className="group">
                    Get Free Assessment
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button href="#services" variant="secondary" size="lg">
                    View All Services
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
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Strategic Focus</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Secure & Compliant</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Zap className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Fast Implementation</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Measurable Results</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Specialized Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Complete AI solutions focused on governance, security and measurable results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                icon: Brain,
                title: "AI Strategy & Roadmap",
                description:
                  "Personalized strategic planning for AI implementation aligned with business objectives",
                benefits: ["Maturity analysis", "Personalized roadmap", "Projected ROI"],
              },
              {
                icon: Cog,
                title: "Intelligent Process Automation",
                description: "RPA, ChatGPT and integrations that optimize workflows while maintaining control and security",
                benefits: ["RPA + AI", "ChatGPT integrations", "24/7 monitoring"],
              },
              {
                icon: BarChart3,
                title: "AI-Powered Analytics",
                description:
                  "Transform data into actionable insights with machine learning and intelligent visualizations",
                benefits: ["Intelligent dashboards", "Accurate predictions", "Automatic alerts"],
              },
              {
                icon: Users,
                title: "AI Team Training",
                description: "Practical training for your team to master AI tools responsibly",
                benefits: ["Practical workshops", "Certifications", "Continuous support"],
              },
              {
                icon: Database,
                title: "Secure Data Governance",
                description: "Robust frameworks that ensure compliance and protection in AI projects",
                benefits: ["GDPR compliance", "Continuous auditing", "Clear policies"],
              },
              {
                icon: Shield,
                title: "AI Governance & Ethics",
                description: "Implementation of responsible AI practices and ethical guidelines",
                benefits: ["Ethical frameworks", "Risk assessment", "Transparency"],
              },
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Implementation Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful AI implementation and measurable results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "We analyze your current state and identify opportunities for AI implementation",
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a personalized roadmap aligned with your business objectives",
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute the solution with agile methodology and continuous feedback",
              },
              {
                step: "04",
                title: "Optimization",
                description: "We monitor, measure, and continuously improve the implemented solution",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-brand-blue to-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{process.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{process.description}</p>
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
              Get a free assessment and discover how AI can accelerate your business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/en/contact" variant="secondary" size="lg">
                Get Free Assessment
              </Button>
              <Button href="/en/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-blue">
                Schedule a Call
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}