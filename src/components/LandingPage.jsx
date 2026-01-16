import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import AppointmentSection from "./FlipFileTest";
import EthosSection from "./EthosSection";
import SocialSection from "./SocialSection";
import ConatctSection from "./ContactSection";
import NewsletterSection from "./NewsLetterSection";


export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AppointmentSection />
      <EthosSection />
      <SocialSection />
      <ConatctSection />
      <NewsletterSection />
    </>
  );
}