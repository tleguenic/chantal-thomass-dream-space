import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Values from "@/components/Values";
import DerivedProducts from "@/components/DerivedProducts";
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
          <Values />
          <DerivedProducts />
          <Licensing />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
