import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Earth from "../components/earth";

export default function HomePage() {
  return (
    <div>
      {/* header */}
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
        <div className="Header-mid grid grid-cols-6">
          <div className="col-span-2">
            <h1 className="text-7xl text-white font-bold  py-16">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <button className="bg-white text-xl py-2 px-6">
              call to action
            </button>
          </div>
          <div className="col-span-1"></div>
          <div className=" col-span-3">
            <Canvas>
              <Suspense fallback={null}>
                <Earth />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>

      {/* sektörlerimiz */}
      <div className="sektorlermiz bg-indigo-900 flex row">
        <h3 className="text-6xl font-bold text-white text-center">
          Sektörlerimiz
        </h3>
      </div>
    </div>
  );
}
