import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import TopHeader from "../components/TopHeader";
import ChatWidget from "../components/ChatWidget";

const MainLayout = ({ children }) => {
  return (
    <>
      <TopHeader />
      <Header />
      <main className="main">{children}</main>
      <ChatWidget />
      <Footer />
    </>
  );
};

export default MainLayout;
