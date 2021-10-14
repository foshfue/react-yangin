import React from "react";
import Header from "./pages/Header";

export default function Sektorlerimiz() {
  return (
    <div>
      <Header />
      <div className="2xl:mx-auto 2xl:container xl:px-0 px-4">
        <div className="xl:flex flex-wrap items-center justify-between relative py-10 lg:py-28 2xl:px-0 xl:px-20 px-0">
          <div className="xl:w-1/2 w-full md:w-auto flex flex-col sm:items-center lg:items-start">
            <div className="md:w-10/12 relative md:flex items-center justify-between">
              <div className="md:flex items-center justify-between w-full">
                <div className="md:pl-20">
                  <h1 className="hidden xl:block text-5xl font-bold tracking-wider text-dark2 uppercase">
                    Sektörlerimiz
                  </h1>
                  <h1 className="xl:hidden text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-dark2 uppercase">
                    Sektörlerimiz
                  </h1>
                  <p className="text-dark2 leading-8 tracking-wide mt-6 text-base md:text-lg">
                    Bulunduğumuz her sektörde işimizi tutluyla yapıyoruz
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:flex-row items-center justify-start lg:justify-start md:justify-center mt-5 md:mt-24">
              <img
                src="https://cdn.tuk.dev/assets/templates/radian/projects(1).png"
                alt="building project"
                className="md:w-auto w-full md:h-auto h-full object-center object-full"
              />
              <div className="border border-black py-6 2xl:px-6 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base xl:text-2xl leading-9 tracking-wider lg:w-1/4 w-full">
                Enerji
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full items-center justify-start lg:justify-start md:justify-center mt-5 md:mt-20">
              <img
                src="https://cdn.tuk.dev/assets/templates/radian/projects(4).png"
                alt="building project"
                className="md:w-auto w-full md:h-auto h-full object-center object-full"
              />
              <div className="border border-black py-6 2xl:px-6 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base xl:text-2xl leading-9 tracking-wider lg:w-1/4 w-full">
                İnşaat
              </div>
            </div>
            <div className="mt-5 xl:mt-24 mt-5 xl:mt-24 xl:block flex items-center md:justify-end justify-center w-full xl:block hidden">
              <button className="py-4 px-6 shadow-xl text-lg tracking-wider text-white hover:opacity-90 ease-in duration-150 flex border border-black items-center bg-dark">
                View All Projects
                <div className="w-8 h-8 rounded-full border border-black flex items-center cursor-pointer justify-center ml-5 md:ml-10 bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={13}
                    height={14}
                    viewBox="0 0 13 14"
                    fill="none"
                  >
                    <path
                      d="M0.827637 7.0004H11.6896"
                      stroke="#1A202C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.03418 1.4741L11.6893 7.0004"
                      stroke="#1A202C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.03427 12.5265L11.6894 7.00022"
                      stroke="#1A202C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="xl:w-1/2 w-full md:w-auto flex flex-col mt-5 md:mt-10 xl:mt-0">
            <div className="flex flex-col md:flex-row flex-col-reverse items-center justify-center lg:justify-end relative">
              <div className="border border-black py-6 2xl:px-6 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base xl:text-2xl leading-9 tracking-wider lg:w-1/4 w-full">
                Fit-out
              </div>
              <img
                src="https://cdn.tuk.dev/assets/templates/radian/projects(2).png"
                alt="building project"
                className="md:w-auto w-full md:h-auto h-full object-center object-full"
              />
              <div className="absolute z-10 right-0 bottom-0 pb-36 sm:pb-28 sm:pr-10 lg:pr-0 xl:-mr-8 md:pb-8">
                <button className="py-4 px-6 shadow-xl text-lg tracking-wider text-dark2 hover:bg-gray-200 ease-in duration-150 flex border border-black items-center bg-white">
                  View Project
                  <div className="w-8 h-8 rounded-full border border-black flex items-center cursor-pointer justify-center ml-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={13}
                      height={14}
                      viewBox="0 0 13 14"
                      fill="none"
                    >
                      <path
                        d="M0.827637 7.0004H11.6896"
                        stroke="#1A202C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.03418 1.4741L11.6893 7.0004"
                        stroke="#1A202C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.03427 12.5265L11.6894 7.00022"
                        stroke="#1A202C"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-col-reverse md:flex-row items-center justify-center lg:justify-end mt-5 md:mt-20">
              <div className="border border-black py-6 2xl:px-6 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base xl:text-2xl leading-9 tracking-wider lg:w-1/4 w-full">
                Kablo
              </div>
              <img
                src="https://cdn.tuk.dev/assets/templates/radian/projects(3).png"
                alt="building project"
                className="md:w-auto w-full md:h-auto h-full object-center object-full"
              />
            </div>
            <div className="flex flex-col flex-col-reverse md:flex-row items-center justify-center lg:justify-end mt-5 md:mt-20">
              <div className="border border-black py-6 2xl:px-6 lg:px-4 px-6 md:w-1/6 2xl:w-1/5 text-base xl:text-2xl leading-9 tracking-wider lg:w-1/4 w-full">
                Tekstil
              </div>
              <img
                src="https://cdn.tuk.dev/assets/templates/radian/projects(5).png"
                alt="building project"
                className="md:w-auto w-full md:h-auto h-full object-center object-full"
              />
            </div>
            <div className="mt-5 xl:mt-24 mt-5 xl:mt-24 xl:block flex items-center  justify-center md:justify-end md:pr-14 w-full xl:hidden block">
              <button className="py-2 px-3 shadow-xl text-base tracking-wider text-white hover:bg-gray-200 ease-in duration-150 flex border border-black items-center bg-dark">
                View All Projects
                <div className="w-8 h-8 rounded-full border border-black flex items-center cursor-pointer justify-center ml-5 md:ml-10 bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={13}
                    height={14}
                    viewBox="0 0 13 14"
                    fill="none"
                  >
                    <path
                      d="M0.827637 7.0004H11.6896"
                      stroke="#1A202C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.03418 1.4741L11.6893 7.0004"
                      stroke="#1A202C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.03427 12.5265L11.689se4 7.00022"
                      stroke="#1A202C"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-row xl:flex-col w-full xl:w-auto items-center 2xl:-mr-20 justify-center relative xl:absolute right-0 2xl:px-0 xl:px-4 px-0">
            <a className="hidden xl:block" href="./work">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={35}
                height={19}
                viewBox="0 0 35 19"
                fill="none"
              >
                <path
                  d="M1 18L17.5 1L34 18"
                  stroke="#718096"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="xl:hidden" href="./work">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-left"
                width={36}
                height={36}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#718096"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="15 6 9 12 15 18" />
              </svg>
            </a>
            <div className="flex items-center xl:flex-col justify-center  py-16">
              <a href="./">
                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray" />
              </a>
              <a href="./work">
                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10" />
              </a>
              <a href="./projects">
                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-indigo xl:mt-10" />
              </a>
              <a href="./testimonials">
                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10" />
              </a>
              <a href="./team">
                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10" />
              </a>
              <a href="./contacts">
                <div className="w-5 h-5 rounded-full ml-5 xl:ml-0 bg-gray xl:mt-10" />
              </a>
            </div>
            <a className="hidden xl:block" href="./testimonials">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={35}
                height={18}
                viewBox="0 0 35 18"
                fill="none"
              >
                <path
                  d="M34 1L17.5 17L1 1"
                  stroke="#718096"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="ml-5 xl:hidden" href="./testimonials">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-right"
                width={36}
                height={36}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#718096"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="9 6 15 12 9 18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
