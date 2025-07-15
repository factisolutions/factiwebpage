import Link from "next/link"
import Image from "next/image"
import { Shield, Brain, BarChart3, Users, Database, Cog, ArrowRight, CheckCircle, Download, Play, Star, TrendingUp, Clock, Award, } from "lucide-react"
import ResponsiveLogo from "@/components/responsive-logo"
import LanguageSelector from "@/components/language-selector"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import ScrollReveal from "@/components/animations/scroll-reveal"
import FadeIn from "@/components/animations/fade-in"

export const metadata = {
  title: "FACTI Solutions | AI with Governance - Secure and Strategic Automation",
  description:
    "FACTI Solutions accelerates your productivity with AI—without compromising security and compliance. Specialized consulting in AI, data governance and process automation.",
  keywords: "AI, Artificial Intelligence, Data Governance, Automation, RPA, Tech Consulting, Data Security",
}

export default function HomePageEN() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
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
              href="#services"
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="#methodology"
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors"
            >
              Methodology
            </Link>
            <Link
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="#resources"
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
                  <span className="text-gradient bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                    AI with Governance
                  </span>
                  <br />
                  Secure and Strategic Automation for Your Business
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                  FACTI Solutions accelerates your productivity with AI—without compromising security and compliance.
                  Transform processes with responsible artificial intelligence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button href="#contact" variant="default" size="lg" className="group">
                    Free Assessment
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button href="#methodology" variant="secondary" size="lg">
                    Our Methodology
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-brand-blue/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Brain className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Strategic AI</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Security</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Cog className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Automation</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust and Social Proof */}
      <section className="py-16 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Trusted by Leading Companies
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Over 50 companies have already transformed their processes with our solutions
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-center">
                <div className="w-32 h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 font-medium">Logo {i}</span>
                </div>
              </div>
            ))}
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
                title: "Ethical & Responsible AI",
                description: "AI implementation with transparency, fairness and accountability in all processes",
                benefits: ["Bias detection", "Explainability", "Ethical monitoring"],
              },
            ].map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>

                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work Methodology Timeline */}
      <section id="methodology" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Proven Methodology
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Structured process that ensures secure implementation and measurable results
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-teal transform -translate-y-1/2"></div>

            <div className="grid md:grid-cols-5 gap-8">
              {[ 
                {
                  step: "01",
                  title: "Discovery",
                  description: "Deep analysis of current processes and identification of AI opportunities",
                  icon: "🔍",
                },
                {
                  step: "02",
                  title: "PoC",
                  description: "Proof of concept with clear metrics and technical feasibility validation",
                  icon: "🧪",
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Development and deployment following security and governance best practices",
                  icon: "⚙️",
                },
                {
                  step: "04",
                  title: "Training",
                  description: "Complete team training for autonomous and responsible operation",
                  icon: "🎓",
                },
                {
                  step: "05",
                  title: "Support",
                  description: "Continuous monitoring, optimizations and evolution of implemented solutions",
                  icon: "🚀",
                },
              ].map((phase, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="relative">
                    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-600 text-center relative z-10">
                      <div className="text-3xl mb-4">{phase.icon}</div>
                      <div className="text-sm font-bold text-brand-blue mb-2">{phase.step}</div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{phase.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{phase.description}</p>
                    </div>

                    <div className="hidden md:block absolute top-1/2 left-1/2 w-4 h-4 bg-gradient-to-r from-brand-blue to-brand-teal rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real results that transformed businesses with responsible AI
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {[ 
              {
                industry: "Manufacturing",
                challenge: "Manual quality control process with 15% defect rate",
                solution: "AI for automatic defect detection with computer vision",
                results: ["85% reduction in defects", "60% time savings", "300% ROI in 8 months"],
                quote:
                  "FACTI's solution transformed our production line. We now have total quality control.",
                author: "Operations Director",
              },
              {
                industry: "Retail",
                challenge: "Inefficient inventory management causing $2M/year in losses",
                solution: "Predictive demand system with machine learning",
                results: ["40% reduction in losses", "25% inventory optimization", "$800k annual savings"],
                quote: "We never imagined AI could have such a direct impact on our financial results.",
                author: "CFO",
              },
              {
                industry: "Financial Services",
                challenge: "Slow and inconsistent manual credit analysis",
                solution: "Intelligent automation with explainable AI for risk analysis",
                results: ["70% reduction in time", "35% improvement in accuracy", "100% GDPR compliance"],
                quote: "We managed to scale operations while maintaining total transparency and regulatory compliance.",
                author: "Head of Risk",
              },
            ].map((story, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-brand-teal mr-2" />
                    <span className="font-semibold text-brand-blue">{story.industry}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Challenge:</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{story.challenge}</p>

                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Solution:</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{story.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">Results:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {story.results.map((result, i) => (
                        <div key={i} className="flex items-center">
                          <TrendingUp className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-brand-teal pl-4 italic text-gray-600 dark:text-gray-300">
                    <p className="mb-2">"{story.quote}"</p>
                    <footer className="text-sm font-medium text-gray-900 dark:text-white">
                      — {story.author}
                    </footer>
                  </blockquote>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  About FACTI Solutions
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  We are specialists in implementing AI solutions that really work, 
                  always focusing on governance, security and measurable results.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-blue mb-2">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Companies Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-blue mb-2">95%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Success Rate</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Security First</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        All projects follow rigorous security and compliance standards.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Brain className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Responsible AI</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        We implement ethical AI with transparency and accountability.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BarChart3 className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Measurable Results</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Focus on ROI and clear metrics to demonstrate value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Resources and Insights
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Exclusive content about AI, governance and digital transformation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Complete AI Governance Guide",
                description: "How to implement governance frameworks in AI projects",
                icon: Download,
                type: "E-book",
                duration: "45 min",
              },
              {
                title: "Webinar: Responsible AI in Practice",
                description: "Real cases of ethical and transparent AI implementation",
                icon: Play,
                type: "Webinar",
                duration: "60 min",
              },
              {
                title: "AI Security Checklist",
                description: "Complete security verification list for AI projects",
                icon: Shield,
                type: "Template",
                duration: "Free",
              },
            ].map((resource, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <resource.icon className="w-6 h-6 text-brand-teal mr-2" />
                    <span className="text-sm font-medium text-brand-blue">{resource.type}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {resource.duration}
                    </span>
                    <Button variant="link" size="sm">
                      Access
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Schedule a free assessment and discover how AI can accelerate your results 
                  while maintaining total security and compliance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Free 30-minute assessment</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Personalized business analysis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Implementation roadmap</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <ResponsiveLogo
                mobileVariant="text"
                tabletVariant="full"
                desktopVariant="full"
                mobileSize="sm"
                tabletSize="md"
                desktopSize="md"
                theme="light"
              />
              <p className="text-gray-400 mt-4">
                Transforming businesses with responsible AI and data governance.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#services" className="hover:text-white transition-colors">AI Strategy</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Automation</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Governance</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Training</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#methodology" className="hover:text-white transition-colors">Methodology</Link></li>
                <li><Link href="#resources" className="hover:text-white transition-colors">Resources</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                                  <p>contactus@facti.solutions</p>
                <p>+55 11 5196-6199</p>
                <p>São Paulo, SP</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FACTI Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}