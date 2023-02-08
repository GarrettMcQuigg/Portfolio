import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center mt-20 pb-8"
    >
      <h1 className="md:text-4xl font-bold text-gray-100 pb-6">Contact</h1>
      <div className="flex flex-row">
        <a
          href="https://www.instagram.com/garrettmcquigg/"
          target="_blank"
          className="px-5"
        >
          <FaInstagram className="w-8 h-8 text-lime-500" />
        </a>
        <a
          href="https://github.com/GarrettMcQuigg"
          target="_blank"
          className="px-5"
        >
          <FaGithub className="w-8 h-8 text-lime-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/garrett-mcquigg-7b3b21174/"
          target="_blank"
          className="px-5"
        >
          <FaLinkedin className="w-8 h-8 text-lime-500" />
        </a>
      </div>
      <p className="max-w-2xl p-4 leading-7 text-center">
        Please feel free to reach out to any of my social medias listed with any
        questions you may have, or click the link below to email me! I look
        forward to working together.
      </p>
      <a
        className="rounded border-2 border-lime-500 py-3 px-8 hover:bg-lime-900/[0.2]"
        href="mailto:garrettmcquigg@gmail.com"
      >
        <span className="text-lime-500 tracking-wider">
          <b>Email Me</b>
        </span>
      </a>
    </div>
  );
}

export default Contact;
