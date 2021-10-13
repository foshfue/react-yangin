import React from "react";

export default function HomePage() {
  return (
    <div>
      <div className="header bg-indigo-900">
        <div className="Menu">
          <h3 className=" text-3xl">Logo</h3>
          <div className="Menu Items ">
            <h4 className="text-lg font-bold text-white hover:text-gray-400 transition-all">
              Kurumsal
            </h4>
            <h4 className="text-lg font-bold text-white hover:text-gray-400 transition-all">
              Sektörler ve Şirketler
            </h4>
            <h4 className="text-lg font-bold text-white hover:text-gray-400 transition-all">
              Medya
            </h4>
            <h4 className="text-lg font-bold text-white hover:text-gray-400 transition-all">
              Sosyal Sorumluluk
            </h4>
            <h4 className="text-lg font-bold text-white hover:text-gray-400 transition-all">
              İletişim
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
