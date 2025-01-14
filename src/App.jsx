import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Checkout from './components/Checkout'
import Navigation from './components/Navigation'
import BackgroundImage from './assets/Background.png';
import Banner from './components/Banner.jsx'
import EnrollmentBanner from './components/EnrollmentBanner'
import YourPath from './components/YourPath'
import Animation from './components/Animation'
import Drawing from './components/Drawing'
import Loader from './components/Loader'
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
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
          <Banner />
          <EnrollmentBanner />
          <YourPath />
          <Animation />
          <Drawing />
          <Checkout />
        </div>
      )}
    </>
  );
};

export default App
