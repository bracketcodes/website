import React  from 'react'

import Header from './Header/Header'
import Aux from '../Hoc/Auxillary'
import Motto from './Motto/Motto'
import WeCreate from './WeCreate/WeCreate'
import WhyUs from './WhyUs/WhyUs'
import WhatWeDo from './WhatWeDo/WhatWeDo'
import AboutUs from './AboutUs/AboutUs'
import StayInTouch from './StayInTouch/StayInTouch'
import Contactus from './ContactUs/ContactUs'
import OurServices from './OurServices/OurServices'

import styles from './Layout.module.css'

const Layout = (props) => {
    return (
    <Aux>
        <Header/>
        <main>
            <Contactus/>
            <Motto/>
            <WhatWeDo/>
            <OurServices/>
            <WhyUs/>
            <AboutUs/>
            <StayInTouch/>
        </main>
    </Aux>
    )
}

export default Layout;
