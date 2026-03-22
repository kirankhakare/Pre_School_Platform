import { Bell, UserCircle, Menu } from "lucide-react";

const TeacherHeader = ({ isOpen, setIsOpen }) => {
  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-4 md:px-6 fixed top-0 left-0 right-0 z-40">
      
      {/* Left */}
      <div className="flex items-center gap-4">
        
        {/* Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)}>
          <Menu className="text-gray-700" />
        </button>

        <h2 className="text-lg font-semibold text-gray-700 hidden md:block">
          Teacher Dashboard
        </h2>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        
        <div className="relative">
          <Bell className="text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <UserCircle size={28} className="text-gray-600" />
          <span className="hidden md:block text-gray-700 font-medium">
            Teacher
          </span>
        </div>

      </div>
    </div>
  );
};

export default TeacherHeader;