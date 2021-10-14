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
          </div>
        </div>
      </div>
    </div>
  );
}
