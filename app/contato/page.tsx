import Page from "@/components/page";
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

export default function ContatoPage() {
  return (
    <Page
      title="Entre em Contato"
      description="Estamos prontos para ajudar sua empresa a transformar dados em insights acionáveis. Entre em contato conosco hoje para uma consulta gratuita."
      content={
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      }
    />
  );
}