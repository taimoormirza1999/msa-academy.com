import React from 'react';
import BannerImage from '../assets/hero_banner.png';
import msaText from '../assets/msa_text.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from './utils/Button';

const Banner = () => {
  // Parallax Scroll Effect Setup
  const { scrollY } = useScroll();

  // Enhanced Parallax Depth Effect
  const parallaxY = useTransform(scrollY, [0, 500], [20, -150]); // Increased for deeper effect
  const textParallaxY = useTransform(scrollY, [0, 500], [50, -150]); // Slightly more dynamic

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 2, ease: 'easeInOut' },
      }}
     
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="relative w-full 2xl:w-85 h-auto mt-16 md:mt-20 pt-10 mx-auto md:w-97 mb-16 md:mb-0 lg:mb-20 xl:mb-0 max-w-[1920px] pb-10"
    >
      {/* Parallax Background Image */}
      <motion.img
        src={BannerImage}
        alt="Banner"
        style={{ y: parallaxY }}
        className="w-full mx-auto lg:w-97 h-[40vh] sm:h-[60vh] lg:h-full object-cover object-[25%_30%] rounded-lg scale-105 banner_img"
      />

      {/* Parallax Foreground Content */}
      <motion.div
        style={{ y: textParallaxY, top: 'calc(100% - 35%)' }}
        className="absolute top-10 md:right-16 lg:right-28 md:left-auto left-0 right-0 z-10 mx-auto w-max"
      >
        <img
          src={msaText}
          alt="MSAAcademy-text"
          className="-mt-7 -ml-1 w-40 h-auto shadow-2xl object-contain mb-3 md:hidden shadow-pink200/65"
        />
        <div className="animate-bounceSlow mt-8 md:mt-auto">
          <Button isRounded={false} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Banner;
