import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-49  text-sm">
        <div>
          <Link to="/">
            <img src="../../public/logo.svg" className="w-14" alt="None" />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Phone: +1 123 456 7890</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>
      <div className="py-5 text-sm text-center">
        <hr />
        <p>Copyright 2024@StolenBeauty.com- All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
