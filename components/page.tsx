import { PageProps } from "./page-props";
import ResponsiveLogo from "./responsive-logo";

export default function Page({ title, description, content }: PageProps) {
  return (
    <div className="bg-gradient-to-tr from-blue-50 via-white to-indigo-100 min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-white/80 shadow-md sticky top-0 z-50">
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
          <div className="flex items-center space-x-4">
            {/* Navigation items can be added here */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-indigo-700 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fadeIn">{title}</h1>
            <p className="text-xl text-indigo-100 mb-8 animate-fadeIn delay-75">
              {description}
            </p>
          </div>
        </div>
      </section>

      {content}

      {/* Footer */}
      <footer className="bg-white border-t mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
          <div>&copy; 2024 FACTI Solutions. Todos os direitos reservados.</div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            {/* ... */}
          </div>
        </div>
      </footer>
    </div>
  );
}