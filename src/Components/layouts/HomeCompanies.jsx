import React from 'react'

const HomeCompanies = () => {
    return (
        <section className='flex flex-col justify-center items-center'>
            <h1 className='font-semibold text-4xl capitalize my-3'>Companies We Work With</h1>
            <p className='font-medium text-base'>Dictum tortor, sed scelerisque mattis malesuada. Urna sed magna a sed nulla egestas bibendum eget.<br /> Consectetur urna varius dolor, fermentum turpis. Sit malesuada id tortor viverra gravida cras. In quis.</p>
            <div className='flex flex-col items-center gap-y-3 my-[2%]'>
                <div className='flex gap-x-8'>
                    <img src='Images/Ellipse63.png' alt='Ellipse63' />
                    <img src='Images/Ellipse64.png' alt='Ellipse64' />
                    <img src='Images/Ellipse65.png' alt='Ellipse65' />
                    <img src='Images/Ellipse66.png' alt='Ellipse66' />
                    <img src='Images/Ellipse67.png' alt='Ellipse67' />
                    <img src='Images/Ellipse68.png' alt='Ellipse68' />
                </div>
                <div className='flex gap-x-8'>
                    <img src='Images/Ellipse69.png' alt='Ellipse69' />
                    <img src='Images/Ellipse70.png' alt='Ellipse70' />
                    <img src='Images/Ellipse71.png' alt='Ellipse71' />
                    <img src='Images/Ellipse72.png' alt='Ellipse72' />
                    <img src='Images/Ellipse73.png' alt='Ellipse73' />
                </div>
            </div>
        </section>
    )
}

export default HomeCompanies