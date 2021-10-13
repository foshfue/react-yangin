import React from "react";

export default function HomePage() {
  return (
    <div>
      <div className="header bg-indigo-900 px-16 py-4">
        <div className="Menu flex justify-between">
          <h3 className=" text-3xl font-bold text-white">Logo</h3>
          <div className="Menu Items flex gap-5 items-center">
            <button className="text-lg font-bold text-white hover:text-gray-400 transition-all">
              Kurumsal
            </button>
            <button className="text-lg font-bold text-white hover:text-gray-400 transition-all">
              Sektörler ve Şirketler
            </button>
            <button className="text-lg font-bold text-white hover:text-gray-400 transition-all">
              Medya
            </button>
            <button className="text-lg font-bold text-white hover:text-gray-400 transition-all">
              Sosyal Sorumluluk
            </button>
            <button className="text-lg font-bold text-white hover:text-gray-400 transition-all">
              İletişim
            </button>
            <button className="text-base text-white hover:text-gray-400 transition-all">
              EN | TR
            </button>
          </div>
        </div>
        <h1 className="text-7xl w-1/2">
          Lorem ipsum dolor sit amet consectetur{" "}
        </h1>
      </div>
    </div>
  );
}
