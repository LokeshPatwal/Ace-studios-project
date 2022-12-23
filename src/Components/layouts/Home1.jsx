import React from "react"

const Home1 = () => {
    return (
        <section className="bg-[url('/public/Images/background.png')] bg-no-repeat bg-cover px-[6%] w-full h-full flex items-center">
            <div className='flex flex-col gap-y-[4vh]'>
                <div className='flex items-center px-1.5 py-1.5 w-fit text-base font-medium bg-[#C4C4C4] rounded-2xl'>
                    <span className='h-8 w-8 rounded-full bg-[#FFE600] mr-4'></span>#1 Digital company in the town!
                </div>
                <div>
                    <h1 className='capitalize text-5xl font-bold font-inter leading-none'>Amet sed<br /> cursus eu<br /> tellus eget.</h1>
                    <p className='font-medium font-inter mt-3'>Vitae augue elementum ullamcorper porta adipiscing dui, consequat enim<br /> quam. Nisi rhoncus vitae orci duis diam eget faucibus. Nulla enim sit nibh sed.</p>
                </div>
                <div className='flex items-center'>
                    <button className='bg-[#6854FC] text-white font-bold font-inter rounded-[20px] px-4 py-1.5'>Connect with us</button>
                    <p className='text-[#6854FC] font-inter font-semibold mx-5'>Browse Our Works</p>
                </div>
            </div>
        </section>
    )
}

export default Home1