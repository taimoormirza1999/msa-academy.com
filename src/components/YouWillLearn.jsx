import React from 'react';

const YouWillLearn = () => {
  return (
  
    <div className="mx-auto   bg-black/50 md:bg-black/40 py-8 px-6 md:p-10  rounded-primary w-90 md:w-85 shadow-2xl shadow-pink200/40 max-w-[1920px]" >
    <h2 className="text-white text-4xl font-ImpactCustom font-bold mb-8 uppercase">WHAT WILL YOU LEARN</h2>
    <div className="md:flex md:space-x-8">
      {/* First Section */}
      <div className="flex-1">
       <div>
       <h4 className="text-white text-xl font-ImpactCustom mb-4 mt-5 ">Getting Started with Your Art Journey</h4>
        <ul className="list-disc list-inside text-sm 2xl:text-lg text-pink200 space-y-2">
          <li>Set yourself up for success: Learn how to choose the right tools, and develop a mindset for growth and creativity.</li>
          <li>Create a personalized learning path: Understand how to set realistic goals and track your progress over time.</li>
          <li>Break the fear of the blank page! Overcome common artistic obstacles, like fear of starting, and discover your creative voice.</li>
          <li>Understand the importance of practice: Learn how to structure your practice sessions effectively for maximum improvement.</li>
        </ul>
       </div>
       <div>
       <h4 className="text-white text-xl font-ImpactCustom mb-4 mt-5">Basic Art Fundamentals</h4>
        <ul className="list-disc list-inside text-sm 2xl:text-lg text-pink200 space-y-2">
        <li>Master the foundational skills that every artist needs, from shapes and forms to light and shadow.</li>
<li>Learn key principles of color theory, perspective, and composition to create stunning, dynamic artworks.</li>
<li>Build a solid foundation that will help you tackle any artistic challenge with confidence.</li>
        </ul>
       </div>
       <div>
       <h4 className="text-white text-xl font-ImpactCustom mb-4 mt-5">Gesture Drawing</h4>
        <ul className="list-disc list-inside text-sm 2xl:text-lg text-pink200 space-y-2">
          <li>Capture movement and flow by learning how to draw dynamic poses to bring your characters to life.</li>
<li> Learn how to focus on capturing the proportions of the human figure in motion to convey action and energy.</li>
<li> Get used to important sketching practice strategies that will help you get comfortable drawing poses without hesitation.</li>
<li> Understand the importance of rhythms to incorporate natural flow into your drawings, giving them an organic feel.</li>
        </ul>
       </div>
      </div>
  
      {/* Second Section */}
      <div className="flex-1">
        <div>
        <h4 className="text-white text-xl font-ImpactCustom mb-4 mt-5">ANIMATION</h4>
        <ul className="list-disc list-inside text-sm 2xl:text-lg text-pink200 space-y-2">
          <li>Get hands-on experience with the core principles of animation, including timing, movement, and expression.</li>
<li>Get familiar with animation software and tools to start creating your own animation sequences.</li>
<li>Learn to bring your characters to life with simple animations and understand the key concepts of motion and story.</li>
<li>Explore both traditional and digital animation techinques that you can apply to your own projects.</li>
        </ul>
        </div>
        <div>
        <h4 className="text-white text-xl font-ImpactCustom mb-4 mt-5">Digital Painting</h4>
        <ul className="list-disc list-inside text-sm 2xl:text-lg text-pink200 space-y-2">
        <li> Familiarize yourself with digital art software and tools like brushes, layers, and shortcuts to enhance your workflow.</li>
<li> Learn how to create digital paintings with texture, depth, and shading, bringing your characters and scenes to life in a digital environment.</li>
<li> Create digital color palettes and understand how to choose and apply colors digitally to enhance mood, atmosphere, and story-telling.</li>
<li> Learn how to add intricate details, textures, and finishing touches yo your digital artwork for a polished look.</li>
        </ul>
        </div>
        <div>
        <h4 className="text-white text-xl font-ImpactCustom mb-4 mt-5">Character Creation</h4>
        <ul className="list-disc list-inside text-sm 2xl:text-lg text-pink200 space-y-2">
          <li>Dive into the creative process of designing unique characters from scratch.</li>
<li> Learn the basics of anatomy, proportions, facial expressions, and body language to bring your characters to life.</li>
<li> Understand character design for various styles wether it's cartoon, stylized, or anime.</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default YouWillLearn;
