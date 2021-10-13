import React from "react";

export default function HomePage() {
  return (
    <div>
      <div className="header bg-indigo-900 px-16 py-6">
        <div className="Menu flex justify-between">
          <h3 className=" text-3xl font-bold text-white">Logo</h3>
          <div className="Menu Items flex gap-5 ">
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
