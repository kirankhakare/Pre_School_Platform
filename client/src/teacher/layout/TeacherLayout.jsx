import { useState } from "react";
import { Outlet } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";
import TeacherHeader from "./TeacherHeader";

const TeacherLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">

      <TeacherSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className={`flex-1 transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"}`}>
        
        <TeacherHeader isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="pt-20 px-4 md:px-6 bg-gray-100 min-h-screen overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default TeacherLayout;