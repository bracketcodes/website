import React from 'react'
import styles from './WhatWeDo.module.css'

import Expertise from './Expertise/Expertise'

const WhatWeDo = (props) => {

    const expertiseList = ['Technology', 'Business', 'Math']

    return (
        <div id='whatWeDo' className={styles['what-we-do']}>
            <div className={styles['what-we-do__header']}>
                <h1>
                    What we do
                </h1>
            </div>
            <div className={styles['what-we-do__descriptors--container']}>
                <div className={styles['what-we-do__descriptors--dropout']}>
                </div>
                <div data-aos="fade-up"  
                data-aos-duration="2000"
                className={styles['descriptors__article']}>
                    <p>
                        We’re a software consultancy helping our clients
                        to elevate their business through seamless digital
                        experience.We build tools and services that unchain people to 
                        connect, collabarate and create. We understand our customer needs and what 
                        our organization does and we focus on where these two meet.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
