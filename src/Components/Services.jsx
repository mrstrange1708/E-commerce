import React from 'react';

const Services = () => {
  return (
    <div id='services' className="py-12 text-gray-500">
      <h2 className="text-3xl text-center font-semibold text-gray-700 mb-10">Our Services</h2>
      <div className="flex justify-center gap-8 pb-25">

        <div className="bg-[#f0f2f1] p-6 w-1/4 text-center rounded-lg">
          <h4 className="text-xl font-semibold text-gray-600 mb-4">CUTS</h4>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="flex justify-between"><span>Women</span> <span>from ₹ 500</span></p>
            <p className="flex justify-between bg-gray-100 p-2 rounded-md"><span>Men</span> <span>from ₹400</span></p>
            <p className="flex justify-between"><span>Children</span> <span>from ₹200</span></p>
            <p className="flex justify-between bg-gray-100 p-2 rounded-md"><span>Bangs Cut</span> <span>from ₹100</span></p>
          </div>
        </div>


        <div className="bg-[#f0f2f1] p-6 w-1/4 text-center rounded-lg">
          <h4 className="text-xl font-semibold text-gray-600 mb-4">COLORS</h4>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="flex justify-between"><span>Full Color</span> <span>from ₹500</span></p>
            <p className="flex justify-between bg-gray-100 p-2 rounded-md"><span>Retouch</span> <span>from ₹300</span></p>
            <p className="flex justify-between"><span>Ombré</span> <span>from ₹300</span></p>
            <p className="flex justify-between bg-gray-100 p-2 rounded-md"><span>Balayage</span> <span>from ₹130</span></p>
          </div>
        </div>


        <div className="bg-[#f0f2f1] p-6 w-1/4 text-center rounded-lg">
          <h4 className="text-xl font-semibold text-gray-600 mb-4">STYLING</h4>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <p className="flex justify-between"><span>Wash & Style</span> <span>from ₹450</span></p>
            <p className="flex justify-between bg-gray-100 p-2 rounded-md"><span>Curling</span> <span>from ₹600</span></p>
            <p className="flex justify-between"><span>Straightening</span> <span>from ₹400</span></p>
            <p className="flex justify-between bg-gray-100 p-2 rounded-md"><span>Bride Styling</span> <span>from ₹300</span></p>
          </div>
        </div>

      </div>
      <div className='w-screen bg-cover bg-fixed bg-center h-100 bg-[#4c4949] bg-opacity-60 bg-blend-overlay'
        style={{ backgroundImage: 'url("src/Assets/bg_img_last.jpg")' }}>
        <h3 className='text-white text-5xl font-light text-center pt-30 pl-30 pr-30 pb-10'>"Beauty is being comfortable and confident in your own skin"</h3>
        <h5 className='text-white text-xl font-light text-center pt-0'>Iman</h5>
      </div>
    </div>
  );
};

export default Services;
