import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EcoVisionSection from "@/components/EcoVisionSection";
import BioEnvelopeSection from "@/components/BioEnvelopeSection";
import ROISection from "@/components/ROISection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <EcoVisionSection />
    <BioEnvelopeSection />
    <ROISection />
    <FooterSection />
  </div>
);

export default Index;
