import React from 'react'

const Homeservices = () => {
    return (
        <section className='flex flex-col items-center my-[5%] gap-y-5 font-inter'>
            <h1 className='font-semibold text-4xl capitalize'>Services that lead the way to better business</h1>
            <p className='font-medium text-base'>Faucibus fringilla sed integer cursus tellus et, quis ultricies. Aliquam, faucibus arcu in laoreet ac elementum in eget.<br /> Massa urna viverra vulputate euismod pulvinar nibh in vel. Laoreet blandit etiam orci est in vel lacus neque pretium.
            </p>
            <div className='w-[60%] flex flex-col items-center '>
                <div className='flex justify-around w-full'>
                    <div className='flex flex-col items-center justify-center my-4'>
                        <div className='bg-[#F0EEFF] p-8 rounded-full'><img src='Images/mobileicon.png' alt='mobileicon' /></div>
                        <p className='text-[#6854FC] font-semibold text-xl my-[4%]'>Mobile App Designing</p>
                        <p className='font-normal text-base'>Justo, amet nisl velit quam. Turpis<br /> nulla morbi vestibulum morbi cum et. </p>
                    </div>
                    <div className='flex flex-col items-center justify-center my-4'>
                        <div className='bg-[#F0EEFF] p-8 rounded-full'><img src='Images/websiteicon.png' alt='websiteicon' /></div>
                        <p className='text-[#6854FC] font-semibold text-xl my-[4%]'>Website Designing</p>
                        <p className='font-normal text-base'>Eu aliquam libero vehicula posuere.<br /> Orci viverra id pharetra adipiscing. Convallis.</p>
                    </div>
                </div>
                <div className='flex justify-around w-full'>
                    <div className='flex flex-col items-center justify-center my-4'>
                        <div className='bg-[#F0EEFF] p-8 rounded-full'><img src='Images/graphicicon.png' alt='graphicicon' /></div>
                        <p className='text-[#6854FC] font-semibold text-xl my-[4%]'>Graphic Designing</p>
                        <p className='font-normal text-base'>Aliquam ut sapien viverra blandit nisi.<br /> Nam fames suscipit erat sed id. Risus.</p>
                    </div>
                    <div className='flex flex-col items-center justify-center my-4'>
                        <div className='bg-[#F0EEFF] p-8 rounded-full'><img src='Images/digitalicon.png' alt='digitalicon' /></div>
                        <p className='text-[#6854FC] font-semibold text-xl my-[4%]'>Digital Marketing</p>
                        <p className='font-normal text-base'>Pulvinar amet ac potenti quam feugiat<br /> praesent maecenas. Platea id egestas.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Homeservices