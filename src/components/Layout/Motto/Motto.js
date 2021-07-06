import React from 'react'

import styles from './Motto.module.css' 

const Motto = () => {
    return (
        <div className={styles['motto']}>
            {/* <img src={require('../../../assets/motto.jpeg')}/> */}
            <div className={styles['quote']}>
                <div
                data-aos="fade-right"  data-aos-duration="1000" 
                className={styles['motto__logo']}>
                    <img src={require('../../../assets/BC.svg')}/>
                </div>
                <div data-aos="fade-left"  data-aos-duration="1000">
                    <h1>Let's Create.</h1>
                </div>
            </div>
                {/* <img src={require('../../../assets/creativity_1.PNG')}/> */}
        </div>
    )
}

export default Motto
