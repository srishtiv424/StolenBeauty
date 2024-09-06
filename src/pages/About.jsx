import React from "react";
import about from "../assets/about_img.png";
import Title from "../components/Title";
import NewsLetterBox from '../components/NewsLetterBox'

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={about}
          alt="About Stolen Beauty"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome to Stolen Beauty, where elegance meets innovation in the
            world of beauty. We are passionate about delivering not just
            products but experiences that enhance your natural allure and
            inspire confidence.
          </p>
          <p>
            Stolen Beauty was founded in 2024 with a singular vision: to bring
            premium beauty products to everyone who seeks quality and
            sophistication. What started as a small venture has quickly
            transformed into a brand known for its commitment to excellence and
            customer satisfaction.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Stolen Beauty, our mission is to empower individuals to express
            their true selves through high-quality beauty products that are
            ethically sourced and environmentally friendly. We believe that
            beauty should be accessible, and we strive to inspire and delight
            our customers with innovative products that make them feel radiant.
          </p>
        </div>
      </div>
      <div className="text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-10 py-10 sm:py-10 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            At Stolen Beauty, quality is at the heart of everything we do. We
            are committed to providing our customers with products that not only
            meet but exceed their expectations. Our Quality Assurance process
            ensures that every product we offer is thoroughly tested and meets
            the highest standards of excellence.
          </p>
        </div>
        <div className="border px-10 md:px-10 py-10 sm:py-10 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            At Stolen Beauty, quality is at the heart of everything we do. We
            are committed to providing our customers with products that not only
            meet but exceed their expectations. Our Quality Assurance process
            ensures that every product we offer is thoroughly tested and meets
            the highest standards of excellence.
          </p>
        </div>
        <div className="border px-10 md:px-10 py-10 sm:py-10 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            At Stolen Beauty, quality is at the heart of everything we do. We
            are committed to providing our customers with products that not only
            meet but exceed their expectations. Our Quality Assurance process
            ensures that every product we offer is thoroughly tested and meets
            the highest standards of excellence.
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
}

export default About;
