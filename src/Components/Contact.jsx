import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <>
            <div id='contact' className='flex justify-evenly m-40 gap-1'>
                <div className='bg-[#f0f2f1] w-1/4 text-center p-6 rounded-lg shadow-md'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl mb-2 text-gray-700" />
                    <h5 className="font-semibold text-lg mt-2">ADDRESS</h5>
                    <p className="text-gray-600">How you can find us:</p>
                    <p className="text-gray-800 font-medium">Kothapeta, Kurnool</p>
                    <p className="text-gray-800 font-medium">Andhra Pradesh 518001</p>
                </div>

                <div className='bg-[#f0f2f1] w-1/4 text-center p-6 rounded-lg shadow-md'>
                    <FontAwesomeIcon icon={faPhone} className="text-xl mb-2 text-gray-700" />
                    <h5 className="font-semibold text-lg mt-2">CONTACT</h5>
                    <p className="text-gray-600">Call us at:</p>
                    <p className="text-gray-800 font-medium">+91 98765 43210</p>
                    <p className="text-gray-800 font-medium">syedatabassum25@gmail.com</p>
                </div>

                <div className='bg-[#f0f2f1] w-1/4 text-center p-6 rounded-lg shadow-md'>
                    <FontAwesomeIcon icon={faClock} className="text-xl mb-2 text-gray-700" />
                    <h5 className="font-semibold text-lg mt-2">WORKING HOURS</h5>
                    <p className="text-gray-600">Mon-Sat: 10 AM - 8 PM</p>
                    <p className="text-gray-800 font-medium">Sunday: Closed</p>

                </div>

            </div>
            <div className="mt-20">
                <iframe
                    title="Google Map"
                    className="w-full h-[400px] rounded-lg shadow-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509418!2d144.96305761531598!3d-37.81627977975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5e76da06ff985%3A0x655049d079b5053c!2sStylish%20Lady%20beauty%20parlour!5e0!3m2!1sen!2sau!4v1610321123173!5m2!1sen!2sau"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div >
        </>
    );

};

export default Contact;
