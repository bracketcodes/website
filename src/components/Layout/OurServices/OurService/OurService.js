import React from 'react'

import styles from './OurService.module.css'

const OurService = (props) => {
    return (
            <div 
            className={styles['our-service']} 
            data-aos="zoom-in" data-aos-delay='100'
            data-aos-duration={props.duration}>
                {
                    props.image ?
                    <div className={styles['our-service-img__container']}>
                        <img src={require(`../../../../assets/${props.image}`)}/>
                    </div> : null
                }
                <div className={styles['description']}>
                    <p>
                        {props.title}
                    </p>
                    <p>
                        {props.content}
                    </p>
                </div>
            </div> 
    )
}

export default OurService
