import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import OurPolicy from "../components/OurPolicy";
import NewsLetterBox from "../components/NewsLetterBox";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <hr className="text-gray-400 my-20" />
      <OurPolicy />
      <hr className="text-gray-400 my-20" />
      <NewsLetterBox />
      
    </div>
  );
}

export default Home;
