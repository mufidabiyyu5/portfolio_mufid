'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import Navbar from "./components/navbar";
import Typewriter from 'typewriter-effect';

export default function Home() {

  const listLogo = [
    { src: "/assets/figma-logo.png", alt: "Figma" },
    { src: "/assets/miro-logo.png", alt: "Miro" },
    { src: "/assets/maze-logo.png", alt: "Maze" },
    { src: "/assets/notion-logo.png", alt: "Notion" },
    { src: "/assets/javascript-logo.png", alt: "Javascript" },
    { src: "/assets/typescript-logo.png", alt: "Typescript" },
    { src: "/assets/react-logo.png", alt: "React" },
    { src: "/assets/next-logo.png", alt: "Next" },
    { src: "/assets/node-logo.png", alt: "Node" },
    { src: "/assets/codeigniter-logo.png", alt: "Codeigniter" },
    { src: "/assets/laravel-logo.png", alt: "Laravel" },
    { src: "/assets/jira-logo.png", alt: "Jira" },
  ]

  // useEffect(() => {
  //   const copy = document.querySelector(".slide").cloneNode(true);
  //   document.querySelector(".logos").appendChild(copy);
  // }, []);

  return (
    <>
      <Navbar />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ffe7f1] to-[#c4c1f3] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-3xl py-20 sm:py-12 lg:py-20">
          <div className="hidden sm:mb-4 sm:flex sm:justify-center bg-[#ffffff4d] py-1 px-4 rounded-full mx-auto w-fit">
            {/* <img src="/assets/FotoMufid.png" alt="Mufid" className="h-24 w-24 rounded-full" /> */}
            <p className="text-white">
              👋 <span className="ms-2">Mochamad Mufid Abiyyu</span>
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl/tight font-semibold tracking-tight text-balance text-white sm:text-6xl/snug">
              Howdy! I'm Mufid<br/> 
              <Typewriter options={{
                strings: ['Frontend Developer', 'UI / UX Designer'],
                autoStart: true,
                loop: true,
              }} />
            </h1>
            <p className="mt-4 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
              A UI/UX Designer & Frontend Developer from Indonesia with more than 2 years of experience who love to creates content on instagram.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="flex items-center rounded-full bg-indigo-700 px-8 py-3 text-md font-semibold text-white shadow-xs hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <img src="/vuesax/bulk/document-download.svg" className="fill-white" alt="Download" />
                <span className="ms-2">Download Resume</span>
              </a>
              <a href="#" className="text-sm/6 font-semibold text-white">
                Contact Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ffe7f1] to-[#c4c1f3]] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
      <div className="logos">
        <div className="slide">
          {
            listLogo.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} />
            ))
          }
          {
            listLogo.map((logo, index) => (
              <img key={index} src={logo.src} alt={logo.alt} />
            ))
          }
        </div>
      </div>

      
    </>
  );
}
