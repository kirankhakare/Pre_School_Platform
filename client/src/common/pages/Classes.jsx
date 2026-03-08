import React from 'react'
import HeroSection from "../components/class/heroSection";
import ClassesSection from "../components/class/classSection";
import CurriculumSection from "../components/class/curriculumSection";
import ScheduleSection from "../components/class/scheduleSection";
import TeachersSection from "../components/class/teacherSection";
import InteractiveZones from "../components/class/interactiveSection";
import AdmissionCTA from "../components/class/enquirySection";

const Classes = () => {
  return (
    <>
    <HeroSection/>
    <ClassesSection/>
    <CurriculumSection/>
    <ScheduleSection/>
    <TeachersSection/>
    <InteractiveZones/>
    <AdmissionCTA/>
    
    </>
  )
}

export default Classes