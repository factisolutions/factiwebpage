import Link from "next/link"
import { ArrowRight, Zap, Shield, TrendingUp, Brain, Settings, BarChart3 } from "lucide-react"
import ResponsiveLogo from "@/components/responsive-logo"

export const metadata = {
  title: "FACTI Solutions | Transforme seu negócio com Inteligência Artificial",
  description:
    "Potencialize sua empresa com soluções de IA, governança de TI e infraestrutura otimizada. Consultoria especializada para o futuro digital.",
}

export default function LandingPage() {
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
              <Link href="/servicos" className="hover:text-white transition-colors">
                Serviços
              </Link>
              <Link href="/sobre" className="hover:text-white transition-colors">
                Sobre
              </Link>
              <Link href="#features" className="hover:text-white transition-colors">
                Soluções
              </Link>
              <Link href="#stats" className="hover:text-white transition-colors">
                Resultados
              </Link>
            </div>
            <div>
              <Link
                href="/contato"
                className="text-sm border border-gray-700 rounded-md px-4 py-2 hover:bg-white/5 transition-all"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-16 md:pt-24">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-teal to-brand-blue">
                Potencialize
              </span>{" "}
              seu negócio com Inteligência Artificial
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-3xl font-normal leading-relaxed">
              Transforme sua empresa com soluções de IA, governança de TI e infraestrutura otimizada. Consultoria
              especializada para impulsionar eficiência, produtividade e crescimento sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/contato"
                className="bg-white text-black font-medium rounded-md px-8 py-3 hover:bg-opacity-90 transition-all"
              >
                Começar Agora
              </Link>
              <Link
                href="/servicos"
                className="flex items-center text-gray-300 hover:text-white transition-colors py-3 px-2 group"
              >
                Nossos Serviços
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div id="stats" className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-semibold mb-1 tracking-tight">98%</p>
              <p className="text-gray-400 text-base">Satisfação dos clientes</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold mb-1 tracking-tight">150+</p>
              <p className="text-gray-400 text-base">Projetos entregues</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold mb-1 tracking-tight">24/7</p>
              <p className="text-gray-400 text-base">Suporte disponível</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-semibold mb-1 tracking-tight">15+</p>
              <p className="text-gray-400 text-base">Anos de experiência</p>
            </div>
          </div>

          {/* Features Section */}
          <div id="features" className="mt-32 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">
              Soluções que transformam negócios
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-brand-teal/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <Brain className="text-brand-teal" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inteligência Artificial</h3>
                <p className="text-gray-400">
                  Automatize processos, gere insights estratégicos e acelere a inovação com aplicações práticas de IA
                  adaptadas ao seu negócio.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-brand-blue/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <Shield className="text-brand-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Governança de TI</h3>
                <p className="text-gray-400">
                  Estruture controles e boas práticas para garantir segurança, conformidade e apoio estratégico à adoção
                  de tecnologias.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-purple-500/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <Settings className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Infraestrutura Otimizada</h3>
                <p className="text-gray-400">
                  Ambientes de TI otimizados para suportar operações inteligentes, seguras e escaláveis para o
                  crescimento futuro.
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
                <h3 className="text-xl font-semibold mb-2">Implementação Rápida</h3>
                <p className="text-gray-400">
                  Soluções práticas e eficientes que geram valor imediato, com implementação ágil e resultados
                  mensuráveis.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-orange-500/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <TrendingUp className="text-orange-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Crescimento Sustentável</h3>
                <p className="text-gray-400">
                  Estratégias personalizadas que respeitam a maturidade da sua organização e impulsionam o crescimento
                  contínuo.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                <div className="bg-cyan-500/20 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <BarChart3 className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Análise Avançada</h3>
                <p className="text-gray-400">
                  Transforme dados em insights acionáveis que impulsionam decisões estratégicas e revelam oportunidades
                  ocultas.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 mb-20 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato para uma consulta inicial gratuita e descubra como podemos ajudar sua empresa a alcançar
              excelência operacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="bg-gradient-to-r from-brand-teal to-brand-blue text-white font-medium rounded-md px-8 py-3 hover:opacity-90 transition-all"
              >
                Agendar Consulta Gratuita
              </Link>
              <Link
                href="/sobre"
                className="border border-gray-700 text-white font-medium rounded-md px-8 py-3 hover:bg-white/5 transition-all"
              >
                Conhecer a FACTI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
