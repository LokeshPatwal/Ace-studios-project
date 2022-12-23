import React from 'react'

const HomeClientSatisfy = () => {
    return (
        <section className='flex w-[85%] mx-auto font-inter gap-x-[5%] my-[10%]'>
            <img src='Images/Imggroup.png' alt='Imagegroup' className='flex flex-[5]' />
            <div className='flex flex-col flex-[5] gap-y-2'>
                <h1 className='font-semibold text-4xl capitalize leading-normal'>Meet Client Satisfaction after working with us</h1>
                <p className='font-semibold text-xl'>Doesn't feel like an agency</p>
                <img src='Images/Stargroup.png' alt='Stars' className='w-36' />
                <p className='font-medium text-base'>Ultricies amet vulputate nulla in elit elit orci vitae tortor. Nunc ut pretium lectus aliquet varius pretium. Nec convallis morbi sapien aliquet augue. Nulla nulla integer pellentesque neque cum amet, turpis lacus, massa. Eu velit nunc adipiscing tincidunt blandi.</p>
                <div className='flex gap-x-[30%]'>
                    <div className='flex space-x-3'>
                        <img src='Images/Gwan.png' alt='Gwan Stacy' />
                        <p><span className='font-semibold text-lg'>Gwan Stacy</span><br /> Cloudexter</p>
                    </div>
                    <div className='flex gap-x-11 '>
                        <button><img src='Images/leftarrow.png' alt='arrow' /></button>
                        <button><img src='Images/rightarrow.png' alt='arrow' /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeClientSatisfy