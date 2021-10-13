import React from "react";

const GridCart = () => {
  return (
    <>
      <div className="static ">
        <img
          src="https://images.pexels.com/photos/3840441/pexels-photo-3840441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Texxt"
        />
        <h3 className="absolute top-0 left-0 object-bottom text-white text-2xl font-bold">
          Ticaret
        </h3>
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
