import React from "react";
import { motion } from "framer-motion";
import { Logo } from "..";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-b-4 border-primary bg-yellow-50 pt-12 mt-24 bg-yellow-100">
      {/* Footer top */}
      <div className="box flex flex-col md:flex-row  justify-between border-b-2 border-yellow-600 pb-10 gap-8">
        {/* Footer top left with background color */}
        <div className="basis-1/2 flex flex-col gap-6 items-center md:items-start text-center md:text-start">
          <div style={{ filter: "invert(1)" }}> {/* Inverted color container */}
            <Logo /> {/* Logo */}
          </div>
          <p className="text-black">
            Your culinary haven for sharing and savoring. Explore recipes,
            restaurants, and engaging discussions. Join us now and indulge in
            flavor-filled experiences!
          </p>
        </div>
        {/* Footer top right */}
        <div className="flex gap-10 basis-1/2 justify-center md:justify-end flex-wrap md:flex-nowrap">
          {/* Footer links */}
          <ul className="flex flex-col gap-2 font-semibold mx-8 items-center md:items-start">
            <li className="text-gray-700 text-sm text-bold mb-2">Navigate</li>
            <motion.li whileHover={{ x: 5 }}>
              <Link to="/">Home</Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <Link to="/blog">Blog</Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <Link to="/recipe">Recipes</Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <Link to="/contact">Contact</Link>
            </motion.li>
          </ul>
          <ul className="flex flex-col gap-2 font-semibold mx-8 items-center md:items-start">
            <li className="text-gray-700 text-sm text-bold mb-2">Legal</li>
            <motion.li whileHover={{ x: 5 }}>
              <Link to="/Disclaimer">Disclaimer</Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <Link to="/About">About Us</Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <Link to="/Terms">Terms</Link>
            </motion.li>
            <motion.li whileHover={{ x: 5 }}>
              <Link to="/Privacy">Privacy</Link>
            </motion.li>
          </ul>
        </div>
      </div>
      {/* Footer bottom */}
      <div className="box flex justify-center sm:justify-between flex-col sm:flex-row w-full gap-4">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} TasteBook. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
