import Header from "../../components/kids_components/Header/Header";
import AboutUs from "./AboutUs/AboutUs";
import EducationPrograms from "./EducationPrograms/EducationPrograms";
import ServiceSection from "./ServiceSection/ServiceSection";
import HowItWorks from "./HowItWorks/HowItWorks";
import ActivityPrograms from "./ActivityPrograms/ActivityPrograms";
import Gallery from "../../components/kids_components/Gallery/Gallery";
import BlogSection from "../../components/kids_components/BlogSection/BlogSection";
import Testimonial from "../../components/kids_components/Testimonial/Testimonial";
import EnquiryForm from "../../components/kids_components/EnquiryForm/EnquiryForm";
import Newsletter from "../../components/kids_components/Newsletter/Newsletter";
import Footer from "../../components/kids_components/Footer/Footer";
import "./Kids.css";

const Home = () => {
  return (
    <div className="kids-app">
      <Header />
      <AboutUs />
      <EducationPrograms />
      <ServiceSection />
      <HowItWorks />
      <ActivityPrograms />
      <Gallery />
      <BlogSection />
      <Testimonial />
      <EnquiryForm />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
