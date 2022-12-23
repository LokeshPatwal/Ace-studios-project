import React from 'react'

const HomeProcess = () => {
    return (
        <section className='flex font-inter w-[86%] mx-auto my-[5%]'>
            <div className='flex-[5]'>
                <img src='Images/Laptopsystem.png' alt='Dashboard' />
            </div>
            <div className='flex-[5]'>
                <h1 className='font-semibold text-4xl capitalize'>Our Process</h1>
                <p className='font-medium text-base my-4'>
                    Sit arcu, egestas nunc, eros dignissim nunc, pretium malesuada. Tristique est tellus non maecenas in egestas aliquam. Eget dolor pellentesque consequat donec lectus nisl ligula. Ut sed nisi amet.
                </p>
                <div className='flex flex-col gap-y-5 my-5'>
                    <div className='flex space-x-4'>
                        <div className='flex flex-1 bg-[#FCEDEE] h-14 justify-center items-center rounded-2xl'><img src='Images/Discovery.png' alt='Discovery' className='h-6 w-6' />
                        </div>
                        <div className='flex-[10]'>
                            <h1 className='font-semibold text-lg my-1'>Discovery</h1>
                            <p>Velit lacus ipsum, urna, pretium lacinia. Mauris fermentum ut nunc est, nibh. Lectus eu vel et placerat sed velit morbi diam. Amet malesuada eget aliquam imperdiet. Arcu dolor sed pretiu</p>
                        </div>
                    </div>
                    <div className='flex space-x-4'>
                        <div className='flex flex-1 bg-[#BED3FF] h-14 justify-center items-center rounded-2xl'><img src='Images/Plan.png' alt='Plan' className='h-6 w-6' /></div>
                        <div className='flex-[10]'>
                            <h1 className='font-semibold text-lg my-1'>Plan</h1>
                            <p>Tellus, lacus, sem adipiscing ac sem amet. Vitae proin volutpat cras tempus vitae. Ipsum consectetur quis diam hendrerit pharetra amet scelerisque. Elementum risus aliquam quam etiam. Eget eu risus dui lacus, orci. Cras ultricies posuere adipiscing faucibu.</p>
                        </div>
                    </div>
                    <div className='flex space-x-4'>
                        <div className='flex flex-1 bg-[#DEFEEA] h-14 justify-center items-center rounded-2xl'><img src='Images/Execute.png' alt='Execute' className='h-6 w-6' /></div>
                        <div className='flex-[10]'>
                            <h1 className='font-semibold text-lg my-1'>Execute</h1>
                            <p>Congue ridiculus at tortor mattis turpis bibendum at pulvinar viverra. Ultrices morbi amet quam nisl risus libero, sodales nibh faucibus. Sed gravida elementum auctor fermentum id sem</p>
                        </div>
                    </div>
                    <div className='flex space-x-4'>
                        <div className='flex flex-1 bg-[#FFEEA6] h-14 justify-center items-center rounded-2xl'><img src='Images/Deliver.png' alt='Deliver' className='h-4 w-6' /></div>
                        <div className='flex-[10]'>
                            <h1 className='font-semibold text-lg my-1'>Deliver</h1>
                            <p>Pellentesque id pharetra, semper neque purus. Ante lacinia in ut sagittis sed sapien. In facilisi in a diam. Pellentesque arcu faucibus vel ornare pulvinar sollicitudin eu. Tempus nisi malesuada convallis velit viverra odio. Senectus consectetur fames in sed velit, ornare. Sed arcu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeProcess