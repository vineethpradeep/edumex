import TopHeader from "./TopHeader";
import NavMenu from "./NavMenu";
import Hero from "../Hero/Hero";

const Header = () => {
  return (
    <section className="top-section">
      <div className="top-pattern"></div>
      <header>
        <TopHeader /> <NavMenu />
      </header>
      <Hero />
    </section>
  );
};

export default Header;
