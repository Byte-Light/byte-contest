import DesignCategories from "@/components/home/DesignCategories";
import DesignShowcase from "@/components/home/DesignShowcase";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main>
      <DesignShowcase />
      <DesignCategories />
      <HeroSection />
    </main>
  );
}
