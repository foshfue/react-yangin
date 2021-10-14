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
      <div className="bg-gray-800 my-16">
        <div className="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative lg:-my-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
              />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="aspect-w-10 aspect-h-6 rounded-xl z-50 shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="object-cover lg:h-full lg:w-full "
                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote>
                  <div>
                    <h2 className="text-white opacity-90 text-5xl font-bold">
                      Enerji
                    </h2>
                    <p className="mt-6 text-2xl font-medium text-white">
                      Enerji sektöründe son 10 yılda lorem lorem lorem lorem
                      lorem lorem lorem lorem lorem lorem lorem lorem lorem
                      lorem lorem lorem lorem lorem lorem lorem lorem
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompaniesCart />
      <Footer />
    </>
  );
}
