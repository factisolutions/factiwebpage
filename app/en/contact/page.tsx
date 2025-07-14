import Page from "@/components/page";
import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

export default function ContactPage() {
  return (
    <Page
      title="Contact Us"
      description="We're ready to help your company transform data into actionable insights. Get in touch with us today for a free consultation."
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