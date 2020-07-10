import React from 'react'

import styles from './Motto.module.css' 

const Motto = () => {
    return (
        <div className={styles['motto']}>
            <img src={require('../../../assets/motto.jpeg')}/>
            <div className={styles['quote']}>
                <h1>Let's Create.</h1>
                <p>
                    We understand our customer needs and what our organization does
                </p>
                <p>
                    And we focus on where these two meet.
                </p>
            </div>
                {/* <img src={require('../../../assets/creativity_1.PNG')}/> */}
        </div>
    )
}

export default Motto
