'use client';

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./components/navbar";
import Typewriter from 'typewriter-effect';

import dataProject from "./data/project.json";
import dataExperiences from "./data/workExperiences.json";

export default function Home() {

  const [data, setData] = useState([]);
  const [dataWork, setDataWork] = useState(dataExperiences.workExperiences);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  useEffect(() => {
    setData(dataProject.ux_project);
  }, []);

  const handleClickButtonProject = (type) => {
    const uxBtn = document.getElementById("ux-project");
    const frontendBtn = document.getElementById("frontend-project");

    setIsTransitioning(true);

    setTimeout(() => {
      if (type == "ux") {
        uxBtn.classList.add("bg-indigo-700");
        uxBtn.classList.remove("bg-gray-900");
        frontendBtn.classList.remove("bg-indigo-700");
        frontendBtn.classList.add("bg-gray-900");
        setData(dataProject.ux_project);
      } else {
        uxBtn.classList.remove("bg-indigo-700");
        uxBtn.classList.add("bg-gray-900");
        frontendBtn.classList.add("bg-indigo-700");
        frontendBtn.classList.remove("bg-gray-900");
        setData(dataProject.frontend_project);
      }
      setIsTransitioning(false);
    }, 500);
  }

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
        <div className="mx-auto max-w-xs sm:max-w-3xl py-20 sm:py-12 lg:py-20">
          <div className="hidden sm:mb-4 sm:flex sm:justify-center bg-[#ffffff4d] py-1 px-4 rounded-full mx-auto w-fit">
            {/* <img src="/assets/FotoMufid.png" alt="Mufid" className="h-24 w-24 rounded-full" /> */}
            <p className="text-white">
              👋 <span className="ms-2">Mochamad Mufid Abiyyu</span>
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl/tight font-semibold tracking-tight text-balance text-white sm:text-6xl/snug">
              Howdy! I&apos;m Mufid<br/> 
              <Typewriter options={{
                strings: ['Frontend Developer', 'UI / UX Designer'],
                autoStart: true,
                loop: true,
              }} />
            </h1>
            <p className="mt-4 text-base font-medium text-pretty text-gray-300 sm:text-xl/8">
              A UI/UX Designer & Frontend Developer from Indonesia with more than 2 years of experience who love to creates content on instagram
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://drive.google.com/file/d/1hMTAeHNy6IGvbHLsld27MZJv-OekXHR1/view?usp=sharing"
                target="_blank"
                className="flex items-center rounded-full bg-indigo-700 px-6 py-3 text-xs font-semibold sm:text-sm sm:px-8 sm:py-3 text-white shadow-xs hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <Image src="/vuesax/bulk/document-download.svg" className="fill-white h-[20px] sm:h-[24px]" alt="Download" />
                <span className="ms-2">Download Resume</span>
              </a>
              <a href="mailto:mochamadmufidabiyyu@gmail.com" className="text-xs/6 sm:text-sm font-semibold text-white">
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
              <Image key={index} src={logo.src} alt={logo.alt} className="h-[64px] sm:h-[100px]" />
            ))
          }
          {
            listLogo.map((logo, index) => (
              <Image key={index} src={logo.src} alt={logo.alt} className="h-[64px] sm:h-[100px]" />
            ))
          }
        </div>
      </div>
      <div id="projects" className="mx-auto max-w-xs sm:max-w-3xl py-20 sm:py-12 lg:py-20">
          <div className="block text-center">
            <h1 className="text-4xl/tight font-semibold tracking-tight text-balance text-white sm:text-5xl/snug">
              Selected Works & Projects
            </h1>
            <p className="mt-4 text-base font-medium text-pretty text-gray-300 sm:text-lg/8">
              Highlights of my UI/UX design and frontend development work, where I turn <br/>ideas into engaging, user-centered products.
            </p>
            <div className="grid grid-cols-2 items-center justify-center gap-x-2 py-0.5 px-2 sm:p-2 rounded-full bg-gray-900 mt-8 w-fit mx-auto">
              <button id="ux-project" onClick={() => handleClickButtonProject('ux')} className="text-sm font-semibold text-white bg-indigo-700 py-3 px-6 rounded-full transition-all duration-1000 ease-in-out sm:text-base hover:cursor-pointer">
                UI/UX Design
              </button>
              <button onClick={() => handleClickButtonProject('frontend')} id="frontend-project" className="text-sm font-semibold text-white bg-gray-900 py-3 px-6 rounded-full transition-all duration-1000 ease-in-out sm:text-base hover:cursor-pointer">
                Frontend Development
              </button>
            </div>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mt-8 transition-opacity duration-500 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            {
              data?.map((item, index) => {
                return (
                  <a key={index} href={item.url} target="_blank">
                    <div className="bg-gray-900 rounded-sm transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-700 hover:cursor-pointer">
                      <Image src={item.image} alt="Project 1" className="object-cover rounded-t"/>
                      <div className="p-6 gap-y-1">
                        <h2 className="text-xl font-bold text-white line-clamp-1">{item.title}</h2>
                        <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  </a>
                )
              })
            }
          </div>
      </div>
      <div id="work" className="mx-auto max-w-xs sm:max-w-4xl py-20 sm:py-12 lg:py-20">
        <div className="block text-center">
          <h1 className="text-4xl/tight font-semibold tracking-tight text-balance text-white sm:text-5xl/snug">
            Sneak Peek of My Work Experiences 👀
          </h1>
          <p className="mt-4 text-base font-medium text-pretty text-gray-300 sm:text-lg/8">
            A quick glimpse into my professional journey, featuring highlights from <br/>my UI/UX design and frontend development roles.
          </p>
        </div>
        <div className="block w-full mt-12">
          {
            dataWork.map((item, index) => {
              return (
                <div key={index} className="flex justify-between items-center p-4 border-b border-gray-800">
                  <div className="block">
                    <h2 className="text-lg sm:text-2xl font-semibold">{item.role}</h2>
                    <p className="text-sm sm:text-base text-gray-400">{item.company}</p>
                  </div>
                  <h2 className="text-base text-right sm:text-xl font-medium text-gray-400">{item.period}</h2>
                </div>
              )
            })
          }
        </div>
      </div>
      <footer id="footer" className="text-center justify-center mx-auto w-full gap-4 p-4 sm:p-16">
          <p className="text-sm sm:text-base tracking-[8px] text-gray-500 mb-4">MADE WITH ❤️ BY</p>
          <Image src="/assets/FotoMufid.png" className="rounded-full h-16 sm:h-24 mx-auto border border-white mb-4"/>
          <h2 className="text-xl sm:text-3xl font-bold uppercase mb-1">Mochamad Mufid Abiyyu</h2>
          <p className="text-sm sm:text-base text-gray-500">UI/UX Designer & Frontend Developer</p>
          <div className="w-2xs sm:w-md mx-auto flex justify-evenly items-center mt-4 mb-8">
            <a href="https://www.linkedin.com/in/mufid-abiyyu/" target="_blank">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-white hover:cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_127_10)">
                  <path d="M18.335 18.339H15.67V14.162C15.67 13.166 15.65 11.884 14.28 11.884C12.891 11.884 12.679 12.968 12.679 14.089V18.339H10.013V9.75H12.573V10.92H12.608C12.966 10.246 13.836 9.533 15.136 9.533C17.836 9.533 18.336 11.311 18.336 13.624V18.339H18.335ZM7.003 8.575C6.79956 8.57526 6.59806 8.53537 6.41006 8.45761C6.22207 8.37984 6.05127 8.26574 5.90746 8.12184C5.76365 7.97793 5.64965 7.80706 5.57201 7.61901C5.49437 7.43097 5.4546 7.22944 5.455 7.026C5.4552 6.71983 5.54618 6.4206 5.71644 6.16615C5.8867 5.91169 6.12859 5.71343 6.41153 5.59645C6.69447 5.47947 7.00574 5.44902 7.30598 5.50894C7.60622 5.56886 7.88196 5.71647 8.09831 5.93311C8.31466 6.14974 8.46191 6.42566 8.52145 6.72598C8.58099 7.0263 8.55013 7.33753 8.43278 7.62032C8.31544 7.9031 8.11687 8.14474 7.86219 8.31467C7.60751 8.4846 7.30917 8.5752 7.003 8.575ZM8.339 18.339H5.666V9.75H8.34V18.339H8.339ZM19.67 3H4.329C3.593 3 3 3.58 3 4.297V19.703C3 20.42 3.594 21 4.328 21H19.666C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3H19.67Z" fill="currentColor"/>
                </g>
                <defs>
                  <clipPath id="clip0_127_10">
                    <rect width="24" height="24" fill="none"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://www.instagram.com/mochamadmufidd/" target="_blank">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-white hover:cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_125_4)">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
                </g>
                <defs>
                  <clipPath id="clip0_125_4">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://wa.me/6285155475622" target="_blank">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-white hover:cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_127_14)">
                  <path d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.813 16.202 15.891 16.158 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29866 8.39101 7.308Z" fill="currentColor"/>
                </g>
                <defs>
                  <clipPath id="clip0_127_14">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://dribbble.com/mufidabiyyu" target="_blank">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-white hover:cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_127_18)">
                  <path d="M19.989 11.572C19.907 9.99791 19.3596 8.4836 18.416 7.221C18.1285 7.53063 17.8212 7.82124 17.496 8.091C16.4969 8.92085 15.3805 9.59819 14.183 10.101C14.35 10.451 14.503 10.79 14.638 11.11V11.113C14.6761 11.2024 14.7128 11.2924 14.748 11.383C16.262 11.213 17.858 11.275 19.405 11.484C19.611 11.512 19.805 11.542 19.989 11.572ZM10.604 4.122C11.5785 5.49517 12.4772 6.92064 13.296 8.392C14.519 7.91 15.53 7.302 16.344 6.625C16.6266 6.39213 16.8925 6.13985 17.14 5.87C15.701 4.65972 13.8803 3.99733 12 4C11.532 3.99968 11.0649 4.04017 10.604 4.121V4.122ZM4.253 9.997C4.93423 9.97981 5.61464 9.93878 6.293 9.874C7.93264 9.72734 9.55828 9.4525 11.155 9.052C10.3205 7.60221 9.41955 6.19171 8.455 4.825C7.42472 5.3354 6.51626 6.06141 5.79124 6.95379C5.06623 7.84617 4.54162 8.88404 4.253 9.997ZM5.783 17.035C6.171 16.468 6.681 15.83 7.358 15.136C8.812 13.646 10.528 12.486 12.514 11.846L12.576 11.828C12.411 11.464 12.256 11.139 12.1 10.833C10.264 11.368 8.33 11.702 6.403 11.875C5.463 11.96 4.62 11.997 4 12.003C3.99823 13.8356 4.62729 15.6128 5.783 17.035ZM15.005 19.415C14.6194 17.4703 14.0735 15.5607 13.373 13.706C11.371 14.433 9.776 15.496 8.543 16.764C8.0454 17.2664 7.60382 17.8213 7.226 18.419C8.60481 19.4478 10.2797 20.0025 12 20C13.0299 20.0015 14.0504 19.8035 15.005 19.417V19.415ZM16.878 18.34C18.4393 17.1398 19.5028 15.4057 19.865 13.47C19.525 13.385 19.094 13.3 18.62 13.234C17.5661 13.0822 16.4968 13.0711 15.44 13.201C16.0351 14.8798 16.5155 16.5961 16.878 18.34ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22Z" fill="currentColor"/>
                </g>
                <defs>
                  <clipPath id="clip0_127_18">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://github.com/mufidabiyyu5" target="_blank">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-500 hover:text-white hover:cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_127_22)">
                  <path d="M12 2C6.475 2 2 6.475 2 12C1.99887 14.0993 2.65882 16.1456 3.88622 17.8487C5.11362 19.5517 6.84615 20.8251 8.838 21.488C9.338 21.575 9.525 21.275 9.525 21.012C9.525 20.775 9.512 19.988 9.512 19.15C7 19.613 6.35 18.538 6.15 17.975C6.037 17.687 5.55 16.8 5.125 16.562C4.775 16.375 4.275 15.912 5.112 15.9C5.9 15.887 6.462 16.625 6.65 16.925C7.55 18.437 8.988 18.012 9.562 17.75C9.65 17.1 9.912 16.663 10.2 16.413C7.975 16.163 5.65 15.3 5.65 11.475C5.65 10.387 6.037 9.488 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.875 9.525 7.163C10.3391 6.93706 11.1802 6.82334 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.138 17.275 6.138C17.825 7.513 17.475 8.538 17.375 8.788C18.012 9.488 18.4 10.375 18.4 11.475C18.4 15.313 16.063 16.163 13.838 16.413C14.2 16.725 14.513 17.325 14.513 18.263C14.513 19.6 14.5 20.675 14.5 21.013C14.5 21.275 14.688 21.587 15.188 21.487C17.173 20.8168 18.8979 19.541 20.1199 17.8392C21.3419 16.1373 21.9994 14.0951 22 12C22 6.475 17.525 2 12 2Z" fill="currentColor"/>
                </g>
                <defs>
                  <clipPath id="clip0_127_22">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
      </footer>
    </>
  );
}
