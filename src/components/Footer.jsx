import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => (
  <div>
    <p className="pt-12 text-base text-gray-400 mx-80 text-center">
      This project showcases my own photos which I have been taken, in an
      interactive gallery built with React, styled with Tailwind CSS, and
      powered by Vite. Click any image to view it in a full-screen modal, all
      managed using useState and useEffect hooks. It’s just for practice and
      fun—enjoy exploring the collection!
    </p>

    <footer className="mt-10 text-white flex items-center justify-center mb-10">
      <p>Made by: 0xjulius</p>
      <a
        href="https://github.com/0xjulius"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2"
      >
        <FaGithub className="text-white w-6 h-6" />
      </a>
    </footer>
  </div>
);

export default Footer;
