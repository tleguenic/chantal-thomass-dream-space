import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Licensing from "@/components/Licensing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <BrandStory />
          <Licensing />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
