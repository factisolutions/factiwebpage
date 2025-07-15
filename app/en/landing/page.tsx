import Link from "next/link"
import { ArrowRight, Zap, Shield, TrendingUp, Brain, Settings, BarChart3 } from "lucide-react"
import ResponsiveLogo from "@/components/responsive-logo"

export const metadata = {
  title: "FACTI Solutions | Transform your business with Artificial Intelligence",
  description:
    "Empower your company with AI solutions, IT governance and optimized infrastructure. Specialized consulting for the digital future.",
}

export default function LandingPageEN() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Spline 3D Background */}
      <div className="fixed inset-0 z-0">
        <iframe
          src="https://my.spline.design/iphone15procopy-pmwnMexXbAOzhjJgYVtuY6kv/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ResponsiveLogo
                mobileVariant="icon"
                tabletVariant="full"
                desktopVariant="full"
                mobileSize="sm"
                tabletSize="md"
                desktopSize="md"
                textColor="text-white"
              />
            </div>
            <div className="hidden md:flex space-x-10 text-sm text-gray-300">
              <Link href="/en/services" className="hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/en/about" className="hover:text-white transition-colors">
                About
              </Link>
              <Link href="#features" className="hover:text-white transition-colors">
                Solutions
              </Link>
              <Link href="#stats" className="hover:text-white transition-colors">
                Results
              </Link>
            </div>
            <div>
              <Link
                href="/en/contact"
                className="text-sm border border-gray-700 rounded-md px-4 py-2 hover:bg-white/5 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-16 md:pt-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-teal to-brand-blue">
                Empower
              </span>{" "}
              your business with Artificial Intelligence
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl font-normal leading-relaxed">
              Transform your company with AI solutions, IT governance and optimized infrastructure. Specialized
              consulting to boost efficiency, productivity and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/en/contact"
                className="bg-white text-black font-medium rounded-md px-8 py-3 hover:bg-opacity-90 transition-all"
              >
                Get Started
              </Link>
              <Link
                href="/en/services"
                className="flex items-center text-gray-300 hover:text-white transition-colors py-3 px-2 group"
              >
                Our Services
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div id="stats" className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-semibold mb-1 tracking-tight">98%</p>
              <p className="text-gray-400 text-base">Client satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold mb-1 tracking-tight">150+</p>
              <p className="text-gray-400 text-base">Projects delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold mb-1 tracking-tight">24/7</p>
              <p className="text-gray-400 text-base">Support available</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold mb-1 tracking-tight">15+</p>
              <p className="text-gray-400 text-base">Years of experience</p>
            </div>
          </div>

          {/* Features Section */}
          <div id="features" className="mt-32 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">
              Solutions that transform businesses
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-brand-teal/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <Brain className="text-brand-teal" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Artificial Intelligence</h3>
                <p className="text-gray-400">
                  Automate processes, generate strategic insights and accelerate innovation with practical AI
                  applications adapted to your business.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-brand-blue/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <Shield className="text-brand-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">IT Governance</h3>
                <p className="text-gray-400">
                  Structure controls and best practices to ensure security, compliance and strategic support for
                  technology adoption.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-purple-500/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <Settings className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Optimized Infrastructure</h3>
                <p className="text-gray-400">
                  Optimized IT environments to support intelligent, secure and scalable operations for future
                  growth.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-green-500/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <Zap className="text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Rapid Implementation</h3>
                <p className="text-gray-400">
                  Practical and efficient solutions that generate immediate value, with agile implementation and
                  measurable results.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-orange-500/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <TrendingUp className="text-orange-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainable Growth</h3>
                <p className="text-gray-400">
                  Personalized strategies that respect your organization's maturity and drive continuous growth.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-cyan-500/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <BarChart3 className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-gray-400">
                  Transform data into actionable insights that drive strategic decisions and reveal hidden
                  opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 mb-20 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already accelerated their digital transformation with our
              specialized solutions.
            </p>
            <Link
              href="/en/contact"
              className="bg-gradient-to-r from-brand-teal to-brand-blue text-white font-medium rounded-md px-8 py-3 hover:opacity-90 transition-all inline-block"
            >
              Start Your Transformation
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 