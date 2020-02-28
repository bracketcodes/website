import React from 'react'

import styles from './AboutUs.module.css'

const AboutUs = (props) => {
    return (
        <div id={'aboutUs'} className={styles['about_us']}>
            <div className={styles['about_us__header--container']}>
                <h1 className={styles['about_us__header']}>
                    About us
                </h1>
            </div>
            <div data-aos="fade-up"  data-aos-duration="2000" className={styles['about_us__article--container']}>
                <article>
                    <b>Bracketcodes</b> is a start up comprised of designers,
                    domain experts and technologists.We are passionate
                    hard workers with <b>creative</b> ideas.
                </article>
                <article>
                    We help companies drive digital transformation through 
                    <b> technology</b> and <b>data</b>.
                </article>
                <article>
                    We are <b>consistent</b> in providing standard quality of service
                    to our <b>customers</b> with creative <b>solutions</b>.
                </article>
            </div>
        </div>
    )
}

export default AboutUs
