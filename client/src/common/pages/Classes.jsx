import React from "react";

import HeroSection from "../components/class/heroSection";
import ClassesSection from "../components/class/classSection";
import CurriculumSection from "../components/class/curriculumSection";
import ScheduleSection from "../components/class/scheduleSection";
import TeachersSection from "../components/class/teacherSection";
import InteractiveZones from "../components/class/interactiveSection";
import AdmissionCTA from "../components/class/enquirySection";

const Classes = () => {
  return (
    <main className="w-full overflow-x-hidden">

      {/* Hero */}
      <HeroSection />

      {/* Content Wrapper */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">

        <ClassesSection />

        <CurriculumSection />

        <ScheduleSection />

        <TeachersSection />

        <InteractiveZones />

        <AdmissionCTA />

      </div>

    </main>
  );
};

export default Classes;