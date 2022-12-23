import React from 'react'
import Home1 from '../Components/layouts/Home1'
import HomeAbout from '../Components/layouts/HomeAbout'
import HomeClientSatisfy from '../Components/layouts/HomeClientSatisfy'
import HomeCompanies from '../Components/layouts/HomeCompanies'
import HomeFooter from '../Components/layouts/HomeFooter'
import HomeProcess from '../Components/layouts/HomeProcess'
import HomeQuestions from '../Components/layouts/HomeQuestions'
import HomeSeeWork from '../Components/layouts/HomeSeeWork'
import Homeservices from '../Components/layouts/HomeServices'
import HomeUltimateServ from '../Components/layouts/HomeUltimateServ'

const Home = () => {
    return (
        <section className='font-roboto '>
            <Home1 />
            <Homeservices />
            <HomeCompanies />
            <HomeProcess />
            <HomeSeeWork />
            <HomeAbout />
            <HomeUltimateServ />
            <HomeClientSatisfy />
            <HomeQuestions />
            <HomeFooter />
        </section>
    )
}

export default Home