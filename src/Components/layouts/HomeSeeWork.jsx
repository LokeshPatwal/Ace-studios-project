import React from 'react'

const HomeSeeWork = () => {
    return (
        <section className='w-[90%] mx-auto flex flex-col justify-center items-center text-center'>
            <h1 className='font-semibold text-4xl capitalize my-3 font-inter '>See Our Work</h1>
            <p className='font-medium text-base'>Interdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum diam quam. Scelerisque mus vel<br /> egestas justo, purus consequat nibh eget. Non risus feugiat porta integer.</p>
            <div className='flex space-x-[5%] my-8'>
                <img src='Images/Seework3.png' alt='Image3' className='w-[30%]' />
                <img src='Images/Seework2.png' alt='Image2' className='w-[30%]' />
                <img src='Images/Seework1.png' alt='Image1' className='w-[30%]' />
            </div>
            <div>
                <button className='bg-[#6854FC] font-bold font-inter rounded-[20px] text-white px-4 py-1.5'>See All Projects</button>
            </div>
        </section>
    )
}

export default HomeSeeWork