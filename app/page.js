import { CurrencyProvider } from "@/lib/currency-context";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CurriculumSection from "@/components/CurriculumSection";
import FormatSection from "@/components/FormatSection";
import SubjectsSection from "@/components/SubjectsSection";
import ProductsSection from "@/components/ProductsSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <CurrencyProvider>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <CurriculumSection />
        <FormatSection />
        <SubjectsSection />
        <ProductsSection />
        <HowItWorks />
      </main>
      <Footer />
    </CurrencyProvider>
  );
}
