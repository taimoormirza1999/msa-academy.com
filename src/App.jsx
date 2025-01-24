import { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";
import Loader from "./components/Loader";
import BackgroundImage from "./assets/background.jpg";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollAnimation from "./components/utils/ScrollAnimation";
import LoaderWrapper from "./components/utils/LoaderWrapper";
import MarqueeWrapper from "./components/MarqueeWrapper";
const Banner = lazy(() => import("./components/Banner"));
const EnrollmentBanner = lazy(() => import("./components/EnrollmentBanner"));
const YourPath = lazy(() => import("./components/YourPath"));
const Animation = lazy(() => import("./components/Animation"));
const Drawing = lazy(() => import("./components/Drawing"));
const Mentors = lazy(() => import("./components/Mentors"));
const YouWillLearn = lazy(() => import("./components/YouWillLearn"));
const CommunityMap = lazy(() => import("./components/CommunityMap"));
const Checkout = lazy(() => import("./components/Checkout"));
const FAQ = lazy(() => import("./components/FAQ"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  const slideIn = (direction) => ({
    hidden: { opacity: 0, x: direction === "bottom" ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  });
 
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
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <Banner />
              {/* <main className="flex items-center justify-center py-5 pb-32">
      <div className="container  ">
        <MarqueeWrapper/>
       
      </div>
    </main> */}
 
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation>
              <LoaderWrapper>
              <EnrollmentBanner />
              </LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={slideIn("bottom")}>
              <LoaderWrapper><YourPath /></LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={slideIn("bottom")}>
              <LoaderWrapper><Animation /></LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={slideIn("bottom")}>
              <LoaderWrapper><Drawing /></LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper><Mentors /></LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper><YouWillLearn /></LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper><CommunityMap /></LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation>
              <LoaderWrapper><EnrollmentBanner /></LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper><Checkout /></LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <Suspense fallback={<Loader />}>
            <ScrollAnimation variants={fadeIn}>
              <LoaderWrapper><FAQ /></LoaderWrapper>
            </ScrollAnimation>
          </Suspense>
          <LoaderWrapper>
          <Footer />
          </LoaderWrapper>
        </div>
      )}
    </>
  );
};

export default App;
