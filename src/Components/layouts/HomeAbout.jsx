import React from 'react'

const HomeAbout = () => {
    return (
        <>
            <section className='font-inter my-[5%]'>
                <div className='flex bg-[#C4C4C4] p-[6%]'>
                    <h1 className='font-semibold text-4xl flex-[5]'>We’re a lean creative agency that uses design and code to solve problems.</h1>
                    <p className='font-normal text-lg border-l-4 border-[#E2E2E2] flex-[6] pl-10'>Semper bibendum nisl, fermentum mi convallis. Sed vitae tincidunt nunc, aliquam orci. Porttitor faucibus morbi sed senectus justo, adipiscing augue. Est, in in pretium at libero morbi. Euismod viverra arcu nisi eu sit.Praesent diam non imperdiet imperdiet potenti tristique et. Amet nec.</p>
                </div>
                <div className='flex w-[86%] items-center mx-auto gap-x-[10%] my-[6%]'>
                    <img src='Images/Colleagues.png' alt='colleagues_together' className='w-[40%]' />
                    <div className='flex flex-col gap-y-5 w-[40%]'>
                        <h1 className='font-semibold text-4xl capitalize'>Designed and built<br/> by an astonishing<br/> creative team.</h1>
                        <p>Et eleifend consectetur tellus consectetur nibh non urna lobortis. Quis sapien enim posuere mollis risus. Nec dictumst ullamcorper et leo. Varius praesent tinc.</p>
                        <div>
                            <button className='bg-[#6854FC] font-bold font-inter rounded-[20px] text-white px-4 py-1.5'>About us</button>
                        </div>
                    </div>
                </div>
            </section>
            <div className='border-b-4 border-[#E8E8E8]'></div>
        </>

    )
}

export default HomeAbout