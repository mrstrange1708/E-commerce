import React from 'react';

const Book = () => {
    return (
        <>
            <div id='appointment' className="max-w-4xl mx-auto m-10">
                <h2 className="text-center text-3xl text-gray-700 mb-20 font-semibold">BOOK ONLINE</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="border-b border-gray-400 w-full outline-none p-2" />
                        <input type="text" placeholder="Last Name" className="border-b border-gray-400 w-full outline-none p-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input type="tel" placeholder="Phone" className="border-b border-gray-400 w-full outline-none p-2" />
                        <input type="email" placeholder="Email" className="border-b border-gray-400 w-full outline-none p-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <input id='date' type="date" className="border-b border-gray-400 w-full outline-none p-2" />
                        <input id='time' type="time" className="border-b border-gray-400 w-full outline-none p-2" />
                    </div>
                    <textarea placeholder="Message" className="border-b border-gray-400 w-full outline-none p-2 h-24"></textarea>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className=" w-4 h-4" />
                        <label className="text-gray-600">I have read and understand the privacy policy.</label>
                    </div>

                    <button type="submit" className="bg-gray-800 text-white py-2 px-4 mt-4 w-full">SEND</button>
                </form>

            </div>
            <div className="mt-20 flex space-x-2 overflow-hidden w-full">
                <img src="/src/Assets/Gallery_img_1.jpg" alt="Gallery 1" className="w-1/5 h-auto object-cover transition-transform transform duration-300 ease-in-out hover:scale-110 hover:opacity-75" />
                <img src="src/Assets/Gallery_img_2.jpg" alt="Gallery 2" className="w-1/5 h-auto object-cover transition-transform transform duration-300 ease-in-out hover:scale-110 hover:opacity-75" />
                <img src="src/Assets/Gallery_img_3.jpg" alt="Gallery 3" className="w-1/5 h-auto object-cover transition-transform transform duration-300 ease-in-out hover:scale-110 hover:opacity-75" />
                <img src="src/Assets/Gallery_img_4.jpg" alt="Gallery 4" className="w-1/5 h-auto object-cover transition-transform transform duration-300 ease-in-out hover:scale-110 hover:opacity-75" />
                <img src="src/Assets/bg_img_last.jpg" alt="Gallery 5" className="w-1/5 h-auto object-cover transition-transform transform duration-300 ease-in-out hover:scale-110 hover:opacity-75" />
            </div>
        </>
    );
}

export default Book;
