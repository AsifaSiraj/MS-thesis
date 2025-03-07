import { useState, useRef, useEffect } from "react";
import './Student.css';  
import { useNavigate } from "react-router-dom";
import { Bell, LayoutDashboard, MicVocal, FilePenLine, CircleUserRound, MessageSquareDot, BookType, TicketCheck, Search, ShoppingCart, Settings, X } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';  // ✅ Bootstrap styles

function Student() {
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false); 
  const [key, setKey] = useState('home'); // ✅ State for tab selection
  const [showRegistrationDropdown, setShowRegistrationDropdown] = useState(false);
  const [showThesisDropdown, setShowThesisDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const dropdownRef2 = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowRegistrationDropdown(false);
      }
    };

    

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
        setShowThesisDropdown(false);
      }
    };

    

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Sidebar */}
      <div className="flex h-screen text-gray-300 overflow-hidden">
        <aside className={`transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-64"} md:translate-x-0`}>
          {/* Sidebar Navigation */}
          <div>
            <div className="flex justify-between items-center mb-6 mt-20">
              <button onClick={() => setSidebarOpen(false)} className="md:hidden">
                <X size={24} className="text-white" />
              </button>
            </div>
            <nav>
              <div className="relative mb-5 mt-5">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full px-4 py-2 text-sm text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <Search className="absolute right-3 top-3 text-gray-400" size={18} />
              </div>
              <ul>
                <li className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2"
                    onClick={() => navigate("/Student")}
                >
                  <LayoutDashboard size={25} className="mr-2" /> Dashboard
                </li>
                <li className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2"
                    onClick={() => navigate("/MainAnnouncement")}
                >
                  <MicVocal size={25} className="mr-2" /> Announcement
                </li>
                <li className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2"
                    onClick={() => setKey("comments")}
                >
                  <MessageSquareDot size={25} className="mr-2" /> Comment
                </li>

                   {/* Thesis Dropdown */}
                   <li className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2 w-full" ref={dropdownRef2}>
  <button
    onClick={() => setShowThesisDropdown(!showThesisDropdown)}
    className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2 w-full"
  >
    <BookType size={25} className="mr-2" /> Thesis
  </button>

  {showThesisDropdown && ( // ✅ Corrected this line
    <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
      <li
        className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2 w-full"
        onClick={() => navigate("/MainSearch")}
      >
        <Search size={25} className="mr-2" /> Thesis Search
      </li>
      <li
        className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2 w-full"
        onClick={() => setKey("mythesis")}
      >
        <BookType size={25} className="mr-2" /> My Thesis
      </li>
    </ul>
  )}
</li>

                {/* Registration Dropdown */}
                <li className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2 w-full" ref={dropdownRef}>
                  <button
                    onClick={() => setShowRegistrationDropdown(!showRegistrationDropdown)}
                    className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2 w-full"
                  >
                    <TicketCheck size={25} className="mr-2" /> Registration
                  </button>

                  {showRegistrationDropdown && (
                    <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
                      <li
                        className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2 w-full"
                        onClick={() => navigate("/MainRegistration")}
                      >
                     <TicketCheck size={25} className="mr-2" />   Registration
                      </li>
                      <li
                        className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2 w-full"
                        onClick={() => setKey("editregistration")}
                      >
                      <FilePenLine size={25} className="mr-2" />  Edit Registration
                      </li>
                    </ul>
                  )}
                </li>

                <li className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2"
                    onClick={() => navigate("/MainAbout")}
                >
                  <ShoppingCart size={25} className="mr-2" /> About us
                </li>
                <li className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2"
                    onClick={() => navigate("/Setting")}
                >
                  <Settings size={25} className="mr-2" /> Setting
                </li>
                <li className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2"
                    onClick={() => navigate("/Notification")}
                >
                  <Bell size={25} className="mr-2" /> Notifications
                </li>
                <li className="flex items-center py-2 hover:bg-gray-700 rounded-md px-2"
                    onClick={() => navigate("/Profile")}
                >
                  <CircleUserRound size={25} className="mr-2" /> Profile
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className={`flex-1 p-6 transition-all duration-300 md:ml-64 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
          <h2 className="heading">Welcome to Dashboard</h2>

          {/* Custom Styled Tabs Section */}
          <div className="flex justify-center space-x-8 text-center mt-4">
            <button
              className={`relative group text-xl font-semibold ${
                key === "home" ? "text-bluish" : "text-gray-500"
              }`}
              onClick={() => setKey("home")}
            >
              Home
            </button>
            <button
              className={`relative group text-xl font-semibold ${
                key === "mythesis" ? "text-bluish" : "text-gray-500"
              }`}
              onClick={() => setKey("mythesis")}
            >
              MyThesis
            </button>
            <button
              className={`relative group text-xl font-semibold ${
                key === "comments" ? "text-bluish" : "text-gray-500"
              }`}
              onClick={() => setKey("comments")}
            >
              Comments
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-4 bg-gray-700 shadow-md rounded-md mt-4">
            {key === "home" && <div>Tab content for Home</div>}
            {key === "mythesis" && <div>Tab content for MyThesis</div>}
            {key === "comments" && <div>Tab content for Comments</div>}
            {key === "editregistration" && <div>Tab content for Edit Registration</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
