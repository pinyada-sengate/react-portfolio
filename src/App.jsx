import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQs from "./sections/faqs/FAQs";
import Contact from "./sections/contact/Contact";
// import FloatingNav from "./sections/floating-nav/FloatingNav";
import Footer from "./sections/footer/Footer";
import Theme from "./theme/Theme";
import { useThemeContext } from "./context/theme-context";
// import { useRef, useState, useEffect } from "react";

const App = () => {
  const { themeState } = useThemeContext();

  // const mainRef = useRef();
  // const [showFloatingNav, setShowFloatingNav] = useState(true);
  // const [siteYPosition, setSiteYPosition] = useState(0);

  // const showFloatingNavHandler = () => {
  //   setShowFloatingNav(true);
  // };

  // const hideFloatingNavHandler = () => {
  //   setShowFloatingNav(false);
  // };

  // // check if floating nav should be show or hide
  // const floatingNavToggleHandler = () => {
  //   // check if scrolled up or down at least 20 px
  //   if (
  //     siteYPosition < mainRef?.current?.getBoundingClientReact().y - 20 ||
  //     siteYPosition > mainRef?.current?.getBoundingClientReact().y + 20
  //   ) {
  //     showFloatingNavHandler();
  //     console.log("showFloatingNavHandler");
  //   } else {
  //     hideFloatingNavHandler();
  //     console.log("hideFloatingNavHandler");
  //   }

  //   setSiteYPosition(mainRef?.current?.getBoundingClientReact().y);
  // };

  // useEffect(() => {
  //   const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

  //   // cleanup function
  //   return () => clearInterval(checkYPosition);
  // }, [siteYPosition]);

  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <Theme />
      {/* {showFloatingNav && <FloatingNav />} */}
      {/* <FloatingNav /> */}
    </main>
  );
};

export default App;
