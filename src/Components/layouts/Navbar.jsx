import React from 'react'

const Navbar = () => {
    return (
        <nav className='w-full h-20 grid grid-cols-[75%_17%_8%] items-center font-roboto z-10'>
            <h1 className='text-[#000000] text-lg font-bold ml-20'><span className='text-[#FFE600]'>Ace</span> Studios</h1>
            <div>
                <button className='bg-[#6854FC] font-bold font-inter rounded-[20px] text-white px-4 py-1.5'>Connect with us</button>
            </div>
            <button><img src='Images/Hamburger.png' alt='Hamburgermenu' /></button>
        </nav>
    )
}

export default Navbar