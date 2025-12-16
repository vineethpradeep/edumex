import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import initTemplateScripts from "./template";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import PureCounter from "@srexi/purecounterjs";

// Landing layout components
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TopHeader from "./components/TopHeader";
import ChatWidget from "./components/ChatWidget";

// Pages
import Home from "./pages/Home";
import Enroll from "./pages/Enroll";
import CourseDetails from "./pages/CourseDetails";
import CoursesSection from "./pages/CoursesSection";
import ContactSection from "./pages/ContactSection";

// Kids page
import HomeKids from "./pages/kids/Home";

// SEO
import SEOHeader from "./components/SEOHeader";

// Styles
import "swiper/swiper-bundle.css";

/* ---------------- Layout Wrapper ---------------- */

function AppLayout() {
  const location = useLocation();

  // Detect kids routes
  const isKidsRoute = location.pathname.startsWith("/kids");

  return (
    <>
      {/* Landing Header */}
      {!isKidsRoute && <TopHeader />}
      {!isKidsRoute && <Header />}

      <main className="main">
        <Routes>
          {/* Landing routes */}
          <Route path="/" element={<Home />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/courses" element={<CoursesSection />} />
          <Route path="/course_details/:id" element={<CourseDetails />} />
          <Route path="/contact" element={<ContactSection />} />

          {/* Kids route */}
          <Route path="/kids" element={<HomeKids />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Landing Footer */}
      {!isKidsRoute && <ChatWidget />}
      {!isKidsRoute && <Footer />}
    </>
  );
}

/* ---------------- App Root ---------------- */

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

      <AppLayout />

      {/* Scroll to top button */}
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
