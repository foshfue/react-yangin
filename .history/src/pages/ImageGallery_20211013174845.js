import React from "react";

const GridCart = () => {
  return (
    <>
      <div className="relative flex justify filter group hover:brightness-75 transition-all ">
        <h3 className="absolute flex bottom-0    left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  font-bold group-hover:text-red-600">
          Ticaret
        </h3>
        <img
          className=""
          src="https://images.pexels.com/photos/3840441/pexels-photo-3840441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Texxt"
        />
      </div>
    </>
  );
};

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-12 gap-0.5">
      <div className="col-span-full sm:col-span-4 bg-gray-500">
        <GridCart />
      </div>
      <div className="col-span-full sm:col-span-4 bg-gray-500">
        <GridCart />
      </div>
      <div className="col-span-full sm:col-span-4 bg-gray-500">
        <GridCart />
      </div>

      <div className="col-span-full sm:col-span-6 bg-red-500">
        <GridCart />
      </div>
      <div className="col-span-full sm:col-span-6 bg-red-500">
        <GridCart />
      </div>
    </div>
  );
}
