// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLogin from './LoginPage/MainLogin.jsx';
import MainHome from './HomePage/MainHome.jsx';
import MainSearch from './SearchPage/MainSearch.jsx';
import MainRegistration from './RegistrationPage/MainRegistration.jsx';
import MainAnnouncement from './AnnouncementPage/MainAnnouncement.jsx';
import MainAbout from './AboutUsPage/MainAbout.jsx';
import Student from './StudentDashBoard/Student.jsx';
function App() {
  return (
    <div className="App">
      
      
       {/* <MainHome />
       <MainLogin />
       <MainSearch />
       <MainRegistration  />
       <MainAnnouncement />
       <MainAbout /> */}
      
      {/* <MainStudent /> */}
      
      
      


       <Router>
      <Routes>
        {/* <Route path="/" element={<MainHome />} /> */}
        <Route path="/" element={<MainHome />} />
        <Route path="/MainLogin" element={<Student />} />
        <Route path="/MainSearch" element={<MainSearch />} />
        <Route path="/MainRegistration" element={<MainRegistration />} />
        <Route path="/MainAnnouncement" element={<MainAnnouncement />} />
        <Route path="/MainAbout" element={<MainAbout />} />
        <Route path="/Student" element={<Student />} />
      </Routes>
    </Router>
        
      
    </div>
  );
}

export default App;
