import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import initTemplateScripts from "./template";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import PureCounter from "@srexi/purecounterjs";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";
import Enroll from "./pages/Enroll";
import CourseDetails from "./pages/CourseDetails";
import CoursesSection from "./pages/CoursesSection";
import ChatWidget from "./components/ChatWidget";
import TopHeader from "./components/TopHeader";
import ContactSection from "./pages/ContactSection";
import SEOHeader from "./components/SEOHeader";

import "swiper/swiper-bundle.css";

function App() {
  useEffect(() => {
    initTemplateScripts();
    AOS.init();
    new PureCounter();
  }, []);

  return (
    <Router>
      <SEOHeader
        title="Edumex | International Higher Diploma Courses Online"
        description="Edumex offers internationally recognized higher diploma courses in Business, Engineering, Computing, Education, Arts & Science, and more."
        url="https://www.edumex.co.uk"
        image="https://www.edumex.co.uk/assets/img/logo.webp"
      />
      {/* <div id="preloader"></div> */}
      <TopHeader />
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/courses" element={<CoursesSection />} />
          <Route path="/course_details/:id" element={<CourseDetails />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <ChatWidget />
      <Footer />
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </Router>
  );
}

export default App;
