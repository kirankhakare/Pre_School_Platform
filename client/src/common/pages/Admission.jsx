import HeroSection from "../components/admission/hero";
import FeeStructureSection from "../components/admission/feeSection";
import FeeInstallment from "../components/admission/FeeInstallment";
import NurserySection from "../components/admission/nurserySection";
import AdmissionProcessSection from "../components/admission/admissionSection";
import DocumentsSection from "../components/admission/documentsSection";
import FAQSection from "../components/admission/faqSection";

import CTASection from "../components/admission/CTASection";

function Admission() {
  return (
    <>
      

      <main className="pt-24 bg-gradient-to-b from-sky-50 via-white to-sky-50 pb-20 overflow-hidden">

        <HeroSection />

        <FeeStructureSection />

        <FeeInstallment/>
        <NurserySection />

        <AdmissionProcessSection />

        <DocumentsSection />

        <FAQSection />

        <CTASection />

      </main>

      
    </>
  );
}

export default Admission;