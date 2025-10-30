import { Sun, Clock, Award } from "lucide-react";
import Header from "@/components/Header";
import InstitutionalBanner from "@/components/InstitutionalBanner";
import HeroSection from "@/components/HeroSection";
import LicenseCard from "@/components/LicenseCard";
import SecurityBanner from "@/components/SecurityBanner";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleLicenseClick = (licenseType: string) => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Show toast notification
    toast({
      title: "Redirecionando...",
      description: `Você será direcionado para o formulário de ${licenseType}.`,
    });

    // In a real application, this would redirect to the actual form page
    // window.location.href = "solicitacao.html";
    
    // For demo purposes, we'll just show the toast
    setTimeout(() => {
      toast({
        title: "Funcionalidade em desenvolvimento",
        description: "O formulário de solicitação será implementado em breve.",
      });
    }, 1500);
  };

  const licenses = [
    {
      icon: Sun,
      title: "Licença Temporada",
      description: "Licença de 3 meses válida para novembro, dezembro e janeiro.",
      buttonText: "Solicitar Licença Temporada",
      type: "Licença Temporada",
    },
    {
      icon: Clock,
      title: "Licença 6 Meses",
      description: "Autorização válida por 6 meses para atividades fixas ou itinerantes.",
      buttonText: "Solicitar Licença 6 Meses",
      type: "Licença 6 Meses",
    },
    {
      icon: Award,
      title: "Licença 12 Meses",
      description: "Licença anual para comerciantes regulares.",
      buttonText: "Solicitar Licença 12 Meses",
      type: "Licença 12 Meses",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <InstitutionalBanner />
      <HeroSection />
      
      {/* License Cards Section */}
      <section className="bg-background py-10 px-5 flex-1">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {licenses.map((license, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <LicenseCard
                  icon={license.icon}
                  title={license.title}
                  description={license.description}
                  buttonText={license.buttonText}
                  onClick={() => handleLicenseClick(license.type)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SecurityBanner />
      <Footer />
    </div>
  );
};

export default Index;
