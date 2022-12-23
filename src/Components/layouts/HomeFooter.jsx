import React from 'react'

const HomeFooter = () => {
    return (
        <footer className='bg-[#0A142F] font-inter text-center space-y-[3%] py-[5%]'>
            <div>
                <h1 className='text-white text-lg font-bold'><span className='text-[#FFE600]'>Ace</span> Studios</h1>
            </div>
            <ul className='flex justify-center text-white font-medium text-lg gap-x-[6%]'>
                <li className='cursor-pointer'>Works</li>
                <li className='cursor-pointer'>Services</li>
                <li className='cursor-pointer'>Contact us</li>
                <li className='cursor-pointer'>Careers</li>
            </ul>
            <div className='space-x-[4%]'>
                <button><img src='Images/Instagram.png' alt='Instagram' /></button>
                <button><img src='Images/Facebook.png' alt='Facebook' /></button>
                <button><img src='Images/Linkedin.png' alt='Linkedin' /></button>
                <button><img src='Images/Twitter.png' alt='Twitter' /></button>
                <button><img src='Images/Youtube.png' alt='Youtube' /></button>
            </div>
            <ul className='flex justify-center text-[#FFFFFF80] font-medium text-lg gap-x-[5%]'>
                <li className='cursor-pointer'>Copyright2021</li>
                <li className='cursor-pointer'>Terms & Conditions</li>
                <li className='cursor-pointer'>Privacy</li>
            </ul>
        </footer>
    )
}

export default HomeFooter