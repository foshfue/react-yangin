import React from "react";

export default function ImageGallery() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-full md:col-span-4 bg-gray-500">1</div>
      <div className="col-span-full md:col-span-4 bg-gray-500">1</div>
      <div className=" md:col-span-4 bg-gray-500">1</div>

      <div className="col-span-full md:col-span-6 bg-red-500">1</div>
      <div className="col-span-full md:col-span-6 bg-red-500">1</div>
    </div>
  );
}
