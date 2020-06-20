import React from 'react'
import styles from './WhatWeDo.module.css'

import Expertise from './Expertise/Expertise'

const WhatWeDo = (props) => {

    //  let logo = '<>'
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
                <div className={styles['what-we-do__descriptors--title']}>
                    {/* <img src={require('../../../assets/data_sci.PNG')}/> */}
                    <div className={styles['descriptors__title']}>
                        {
                            expertiseList.map(
                                (expertise) => {
                                    return (
                                        <Expertise
                                        key={expertise} 
                                        expertise={expertise}/>
                                    )
                                }
                            )
                        }   
                    </div>
                </div>
                <div data-aos="fade-up"  
                data-aos-duration="2000"
                className={styles['descriptors__article']}>
                    <p>We’re a software consultancy solving complex 
                        problems with <b>technology, business, mathematics </b>
                        and a little bit of creativity.We help our clients
                        to elevate their business through seamless digital
                        experience.</p>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
