import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Checkout from "./components/Checkout";
import Navigation from "./components/Navigation";
import BackgroundImage from "./assets/background.jpg";
import Banner from "./components/Banner.jsx";
import EnrollmentBanner from "./components/EnrollmentBanner";
import YourPath from "./components/YourPath";
import Animation from "./components/Animation";
import Drawing from "./components/Drawing";
import Loader from "./components/Loader";
import Mentors from "./components/Mentors.jsx";
import YouWillLearn from "./components/YouWillLearn.jsx";
import CommunityMap from "./components/CommunityMap.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import FAQ from "./components/FAQ.jsx";
import { motion } from "framer-motion";
import ScrollAnimation from "./components/utils/ScrollAnimation.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  const slideIn = (direction) => ({
    hidden: { opacity: 0, x: direction === "bottom" ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className="min-h-screen mx-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
          <Navigation />
          <ScrollAnimation variants={fadeIn}>
            <Banner />
          </ScrollAnimation>
          <ScrollAnimation>
            <EnrollmentBanner />
          </ScrollAnimation>

          <ScrollAnimation variants={slideIn("bottom")}>
            <YourPath />
          </ScrollAnimation>

          <ScrollAnimation variants={slideIn("bottom")}>
            <Animation />
          </ScrollAnimation>

          <ScrollAnimation variants={slideIn("bottom")}>
            <Drawing />
          </ScrollAnimation>

          <ScrollAnimation variants={fadeIn}>
            <Mentors />
          </ScrollAnimation>

          <ScrollAnimation variants={fadeIn}>
            <YouWillLearn />
          </ScrollAnimation>

          <ScrollAnimation variants={fadeIn}>
            <CommunityMap />
          </ScrollAnimation>

          <ScrollAnimation>
            <EnrollmentBanner />
          </ScrollAnimation>

          <ScrollAnimation variants={fadeIn}>
            <Checkout />
          </ScrollAnimation>

          <ScrollAnimation variants={fadeIn}>
        <FAQ />
      </ScrollAnimation>

          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
