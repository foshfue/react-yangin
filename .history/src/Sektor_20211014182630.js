import React from "react";
import Navigation from "./pages/Navigation";
import CompaniesCart from "./pages/CompaniesCart";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

const first = { name: "Projects", href: "#", current: false };
const second = { name: "Project Nero", href: "#", current: true };
// TODO 3. rootu ekle navigation'a

export default function Sektor() {
  return (
    <>
      <Header />
      <Navigation first={first} second={second} />
      <div className="container mx-auto pt-16">
        <div className="pt-32 md:pt-12 xl:pt-0 xl:w-full w-11/12 mx-auto border-b .border-gray-300">
          <p className="mb-4 font-bold text-gray-800 text-base">
            Trending Posts
          </p>
          <div className="xl:flex lg:flex sm:flex-1 md:flex flex-wrap justify-between">
            <div className="lg:w-1/2 xl:w-1/4 mx-auto xl:mx-0 md:w-1/2 flex sm:mx-auto mb-6 items-center">
              <div className="h-16 w-20">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_1.png"
                  alt
                  className="h-full w-full object-cover overflow-hidden rounded shadow"
                />
              </div>
              <div className="pt-3 pb-3 ml-2 pr-5">
                <p className="uppercase text-xs text-indigo-700">Business</p>
                <p className="text-base text-gray-800">
                  Productivity Tips for Effective Leaders
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-1/4 mx-auto xl:mx-0 md:w-1/2 flex sm:mx-auto mb-6 items-center">
              <div className="h-16 w-20">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_2.png"
                  alt
                  className="h-full w-full object-cover overflow-hidden rounded shadow"
                />
              </div>
              <div className="pt-3 pb-3 ml-2 pr-5">
                <p className="uppercase text-xs text-indigo-700">Business</p>
                <p className="text-base text-gray-800">
                  Productivity Tips for Effective Leaders
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-1/4 mx-auto xl:mx-0 md:w-1/2 flex sm:mx-auto mb-6 items-center">
              <div className="h-16 w-20">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_3.png"
                  alt
                  className="h-full w-full object-cover overflow-hidden rounded shadow"
                />
              </div>
              <div className="pt-3 pb-3 ml-2 pr-5">
                <p className="uppercase text-xs text-indigo-700">Business</p>
                <p className="text-base text-gray-800">
                  Productivity Tips for Effective Leaders
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-1/4 mx-auto xl:mx-0 md:w-1/2 flex sm:mx-auto mb-6 items-center">
              <div className="h-16 w-20">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_4.png"
                  alt
                  className="h-full w-full object-cover overflow-hidden rounded shadow"
                />
              </div>
              <div className="pt-3 pb-3 ml-2">
                <p className="uppercase text-xs text-indigo-700">Business</p>
                <p className="text-base text-gray-800">
                  Productivity Tips for Effective Leaders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
