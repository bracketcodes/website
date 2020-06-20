import React from 'react'

import styles from './StayInTouch.module.css'

const StayInTouch = (props) => {
    return (
        <div id='contactUs' className={styles['stay_in_touch']}>
            <div className={styles['stay_in_touch__header--container']}>
                <h1 className={styles['stay_in_touch__header']}>
                    Stay in touch
                </h1>
            </div>
            <div className={styles['stay_in_touch__article--container']}>
                <ul data-aos="fade-right"  data-aos-duration="3000">
                    <li>
                        Email : bracketcodes@gmail.com
                    </li>
                    <li>
                        Phone : +91 9786535793 , +91 9790054083
                    </li>
                    <li>
                        Location : Chennai
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default StayInTouch
