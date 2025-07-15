import Link from "next/link"
import Image from "next/image"
import { Shield, Brain, BarChart3, Users, Database, Cog, ArrowRight, CheckCircle, Download, Play, Star, TrendingUp, Clock, Award, } from "lucide-react"
import ResponsiveLogo from "@/components/responsive-logo"
import LanguageSelector from "@/components/language-selector"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import ScrollReveal from "@/components/animations/scroll-reveal"
import FadeIn from "@/components/animations/fade-in"

export default function HomePage() {
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
              Serviços
            </Link>
            <Link
              href="#methodology"
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors"
            >
              Metodologia
            </Link>
            <Link
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#resources"
              className="text-gray-700 dark:text-gray-300 hover:text-brand-blue font-medium transition-colors"
            >
              Recursos
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector currentLang="pt" />
            <Button href="#contact" variant="default" size="sm" className="hidden md:inline-flex">
              Avaliação Gratuita
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
                    IA com Governança
                  </span>
                  <br />
                  Automação Segura e Estratégica para Seu Negócio
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                  A FACTI Solutions acelera sua produtividade com IA—sem comprometer segurança e conformidade.
                  Transforme processos com inteligência artificial responsável.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button href="#contact" variant="default" size="lg" className="group">
                    Avaliação Gratuita
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button href="#methodology" variant="secondary" size="lg">
                    Nossa Metodologia
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
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">IA Estratégica</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Segurança</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Cog className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Automação</p>
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
                Confiado por Empresas Líderes
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mais de 50 empresas já transformaram seus processos com nossas soluções
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
                Nossos Serviços Especializados
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Soluções completas de IA com foco em governança, segurança e resultados mensuráveis
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                icon: Brain,
                title: "Estratégia & Roadmap de IA",
                description:
                  "Planejamento estratégico personalizado para implementação de IA alinhada aos objetivos de negócio",
                benefits: ["Análise de maturidade", "Roadmap personalizado", "ROI projetado"],
              },
              {
                icon: Cog,
                title: "Automação Inteligente de Processos",
                description: "RPA, ChatGPT e integrações que otimizam fluxos de trabalho mantendo controle e segurança",
                benefits: ["RPA + IA", "Integrações ChatGPT", "Monitoramento 24/7"],
              },
              {
                icon: BarChart3,
                title: "Analytics Potencializado por IA",
                description:
                  "Transforme dados em insights acionáveis com machine learning e visualizações inteligentes",
                benefits: ["Dashboards inteligentes", "Predições precisas", "Alertas automáticos"],
              },
              {
                icon: Users,
                title: "Treinamento de Equipes em IA",
                description: "Capacitação prática para que sua equipe domine ferramentas de IA com responsabilidade",
                benefits: ["Workshops práticos", "Certificações", "Suporte contínuo"],
              },
              {
                icon: Database,
                title: "Governança Segura de Dados",
                description: "Frameworks robustos que garantem conformidade e proteção em projetos de IA",
                benefits: ["LGPD compliance", "Auditoria contínua", "Políticas claras"],
              },
              {
                icon: Shield,
                title: "IA Ética e Responsável",
                description: "Implementação de IA com transparência, fairness e accountability em todos os processos",
                benefits: ["Bias detection", "Explicabilidade", "Monitoramento ético"],
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
                Nossa Metodologia Comprovada
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Processo estruturado que garante implementação segura e resultados mensuráveis
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
                  description: "Análise profunda dos processos atuais e identificação de oportunidades de IA",
                  icon: "🔍",
                },
                {
                  step: "02",
                  title: "PoC",
                  description: "Prova de conceito com métricas claras e validação de viabilidade técnica",
                  icon: "🧪",
                },
                {
                  step: "03",
                  title: "Implementação",
                  description: "Desenvolvimento e deploy seguindo melhores práticas de segurança e governança",
                  icon: "⚙️",
                },
                {
                  step: "04",
                  title: "Treinamento",
                  description: "Capacitação completa das equipes para operação autônoma e responsável",
                  icon: "🎓",
                },
                {
                  step: "05",
                  title: "Suporte",
                  description: "Monitoramento contínuo, otimizações e evolução das soluções implementadas",
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Casos de Sucesso</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Resultados reais que transformaram negócios com IA responsável
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {[ 
              {
                industry: "Manufatura",
                challenge: "Processo manual de controle de qualidade com 15% de defeitos",
                solution: "IA para detecção automática de defeitos com computer vision",
                results: ["85% redução de defeitos", "60% economia de tempo", "ROI de 300% em 8 meses"],
                quote:
                  "A solução da FACTI transformou nossa linha de produção. Agora temos controle total da qualidade.",
                author: "Diretor de Operações",
              },
              {
                industry: "Varejo",
                challenge: "Gestão de estoque ineficiente causando perdas de R$ 2M/ano",
                solution: "Sistema preditivo de demanda com machine learning",
                results: ["40% redução de perdas", "25% otimização de estoque", "R$ 800k economia anual"],
                quote: "Nunca imaginamos que IA pudesse ter impacto tão direto no nosso resultado financeiro.",
                author: "CFO",
              },
              {
                industry: "Serviços Financeiros",
                challenge: "Análise manual de crédito demorada e inconsistente",
                solution: "Automação inteligente com IA explicável para análise de risco",
                results: ["70% redução no tempo", "35% melhoria na precisão", "100% compliance LGPD"],
                quote: "Conseguimos escalar operações mantendo total transparência e conformidade regulatória.",
                author: "Head de Risco",
              },
            ].map((story, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-brand-teal mr-2" />
                    <span className="font-semibold text-brand-blue">{story.industry}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Desafio:</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{story.challenge}</p>

                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Solução:</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{story.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3">Resultados:</h4>
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
                  Sobre a FACTI Solutions
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Somos especialistas em implementar soluções de IA que realmente funcionam, 
                  sempre com foco em governança, segurança e resultados mensuráveis.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-blue mb-2">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Empresas Atendidas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-blue mb-2">95%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Taxa de Sucesso</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Nossos Valores</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Segurança Primeiro</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Todos os projetos seguem rigorosos padrões de segurança e conformidade.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Brain className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">IA Responsável</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Implementamos IA ética com transparência e accountability.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BarChart3 className="w-6 h-6 text-brand-teal mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Resultados Mensuráveis</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Foco em ROI e métricas claras para demonstrar valor.
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
                Recursos e Insights
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Conteúdo exclusivo sobre IA, governança e transformação digital
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Guia Completo de Governança de IA",
                description: "Como implementar frameworks de governança em projetos de IA",
                icon: Download,
                type: "E-book",
                duration: "45 min",
              },
              {
                title: "Webinar: IA Responsável na Prática",
                description: "Cases reais de implementação de IA ética e transparente",
                icon: Play,
                type: "Webinar",
                duration: "60 min",
              },
              {
                title: "Checklist de Segurança para IA",
                description: "Lista completa de verificações de segurança para projetos de IA",
                icon: Shield,
                type: "Template",
                duration: "Gratuito",
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
                      Acessar
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
                  Pronto para Transformar Seu Negócio?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Agende uma avaliação gratuita e descubra como a IA pode acelerar seus resultados 
                  mantendo total segurança e conformidade.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Avaliação gratuita de 30 minutos</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Análise personalizada do seu negócio</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-brand-teal mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">Roadmap de implementação</span>
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
                Transformando negócios com IA responsável e governança de dados.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#services" className="hover:text-white transition-colors">Estratégia de IA</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Automação</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Governança</Link></li>
                <li><Link href="#services" className="hover:text-white transition-colors">Treinamento</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#about" className="hover:text-white transition-colors">Sobre</Link></li>
                <li><Link href="#methodology" className="hover:text-white transition-colors">Metodologia</Link></li>
                <li><Link href="#resources" className="hover:text-white transition-colors">Recursos</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Contato</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                              <p>contactus@facti.solutions</p>
              <p>+55 11 5196-6199</p>
                <p>São Paulo, SP</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FACTI Solutions. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}