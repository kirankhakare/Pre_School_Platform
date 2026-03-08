import PublicNavbar from "../components/PublicNavbar";
import Footer from "../components/Footer";

import HeroSection from "../components/admission/hero";
import FeeStructureSection from "../components/admission/feeSection";
import NurserySection from "../components/admission/nurserySection";
import AdmissionProcessSection from "../components/admission/admissionSection";
import DocumentsSection from "../components/admission/documentsSection";
import FAQSection from "../components/admission/faqSection";
import ContactSection from "../components/admission/applicationSection";
import CTASection from "../components/admission/callSection";

function Admission() {
  return (
    <>
      

      <main className="pt-24 bg-gradient-to-b from-sky-50 via-white to-sky-50 pb-20 overflow-hidden">

        <HeroSection />

        <FeeStructureSection />

        <NurserySection />

        <AdmissionProcessSection />

        <DocumentsSection />

        <FAQSection />

        <ContactSection />

        <CTASection />

      </main>

      
    </>
  );
}

export default Admission;