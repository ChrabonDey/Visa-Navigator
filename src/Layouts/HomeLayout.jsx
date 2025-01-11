import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isSticky ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1280px] w-full">
          <Header />
        </div>
      </header>
      <Outlet />
      <section className="mt-14">
        <Footer />
      </section>
    </div>
  );
};

export default HomeLayout;
