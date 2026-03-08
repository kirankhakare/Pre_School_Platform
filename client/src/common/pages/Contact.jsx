
import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

import ContactHeroSection from "../components/contact/ContactHeroSection";
import ContactInfoCardsSection from "../components/contact/ContactInfoCardsSection";
import ContactMainSection from "../components/contact/ContactMainSection";
import SocialMediaSection from "../components/contact/SocialMediaSection";
import QuickFAQSection from "../components/contact/QuickFAQSection";
import BusinessHoursSection from "../components/contact/BusinessHoursSection";
import VisitCTASection from "../components/contact/VisitCTASection";

function Contact() {
  return (
    <>
     

      <main className="pt-24 bg-gradient-to-b from-sky-50 via-white to-sky-50 pb-20 overflow-hidden">

        <ContactHeroSection />

        <ContactInfoCardsSection />

        <ContactMainSection />

        <SocialMediaSection />

        <QuickFAQSection />

        <BusinessHoursSection />

        <VisitCTASection />

      </main>

    
    </>
  );
}

export default Contact;

