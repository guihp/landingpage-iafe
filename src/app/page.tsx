import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import ServicesSection from "@/components/ServicesSection";
import AboutUsSection from "@/components/AboutUsSection";
import WhyHireUs from "@/components/WhyHireUs";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <ServicesSection />
      <AboutUsSection />
      <WhyHireUs />
      <BlogSection />
      <ContactSection />
    </>
  );
}
