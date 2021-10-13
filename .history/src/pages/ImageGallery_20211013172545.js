import React from "react";

const GridCart = () => {
  return (
    <>
      <div className="relative  flex">
        <h3 className="absolute flex bottom-0 justify-items-center align-middle self-center text-center text-white text-2xl font-bold">
          Ticaret
        </h3>
        <img
          src="https://images.pexels.com/photos/3840441/pexels-photo-3840441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Texxt"
        />
      </div>
    </>
  );
};

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-12">
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
