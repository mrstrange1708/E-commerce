import React from 'react'

const About = () => {
    return (
        <>
            <div id='about' className='px-10 md:px-20 py-10 max-w-screen-lg mx-auto'>
                <h3 className='text-center text-3xl font-semibold text-gray-700 mb-6'>ABOUT US</h3>
                <div className='flex grid-cols-1 md:grid-cols-2 gap-10 text-gray-600'>
                    <div className='space-y-5 text-left w-1/2 m-5'>
                        <h5 className='text-xl font-medium'>💆‍♀️ Who We Are</h5>
                        <p>At Stylish Lady, we believe that self-care is essential, not a luxury. With years of experience, our skilled professionals provide top-notch beauty services, from hair styling and skincare treatments to bridal makeovers.</p>
                        <h5 className='text-xl font-medium text-gray-600'>✨ Our Mission</h5>
                        <p>Our mission is to make every client feel confident and beautiful. We prioritize quality, comfort, and personalized care, ensuring that each visit leaves you refreshed and rejuvenated.</p>
                    </div>
                    <div className='space-y-5 text-left md:text-right w-1/2 m-5'>
                        <h5 className='text-xl font-medium'>🌿 Why Choose Us?</h5>
                        <ul>
                            <li className='p-1'><span className='text-gray-600 text-xl font-medium'>Certified Beauty Professionals</span>: Our team consists of licensed and well-trained experts dedicated to delivering exceptional services.</li>
                            <li className='p-1'><span className='text-gray-600 text-xl font-medium'>Premium-Quality Products</span>: We use only top-tier, dermatologically tested beauty products to ensure the best results for your skin and hair.</li>
                            <li className='p-1'><span className='text-gray-600 text-xl font-medium'>Customized Beauty Solutions</span>: Whether you need a bridal makeover, a skin-revitalizing facial, or a hair transformation, we tailor our services to meet your individual preferences.</li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-screen bg-cover bg-fixed bg-center h-100 bg-[#4c4949] bg-opacity-60 bg-blend-overlay' 
            style={{backgroundImage : 'url("src/Assets/bg_sub_img.jpg")'}}>
                <h3 className='text-white text-5xl font-light text-center pt-30 pl-30 pr-30 pb-10 '>"THERE IS NO REAL BEAUTY WITHOUT SOME SLIGHT IMPERFECTION"</h3>
                <h5 className='text-white text-xl font-light text-center pt-0'>James Salter</h5>


            </div>
        </>
    )
}

export default About



