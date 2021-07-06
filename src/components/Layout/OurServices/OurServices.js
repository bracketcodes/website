import React from 'react'

import styles from './OurServices.module.css'
import OurService from './OurService/OurService'
import * as constants from '../../../constants/constants'


const OurServices = (props) => {

    let servicesRef = React.useRef()
    let services = [{title: 'Customer Experience', image: 'customer_experience.jpg', duration: '1000', content: constants.SERVICE.CUSTOMER_EXPERIENCE},
                    {title: 'Data & ML', image: 'data_and_ml.jpg', duration: '1500', content: constants.SERVICE.DATA_AND_ML},
                    {title: 'Application services', image: 'application_services.jpg', duration: '2000', content: constants.SERVICE.APPLICATION_SERVICES},
                    {title: 'Mordenizing Applications', image: 'application_mordernization.JPG', duration: '2500', content: constants.SERVICE.MORDENIZING_APPLICATIONS}, 
                 ] 
    
    const sideScroll = (element, direction) => {
        let scrollAmount = 0;
        var slideTimer = setInterval(function(){
            if(direction == 'left'){
                element.scrollLeft += 10;
            } else {
                element.scrollLeft -= 10;
            }
            scrollAmount += 10;
            if(scrollAmount >= 400){
                window.clearInterval(slideTimer);
            }
        }, 10);
    }

    return (
        <div id='ourServices' className={styles['our-services__container']}>
                <div
                className={styles['services-scroller']}>
                    <i
                    onClick={() => {sideScroll(servicesRef.current, 'left')}} 
                    className="fa fa-angle-right"></i>
                </div>
                <div
                className={[styles['services-scroller'], styles['services-scroller__left']].join(' ')}>
                    <i
                    onClick={() => {sideScroll(servicesRef.current, 'right')}} 
                    className="fa fa-angle-left"></i>
                </div>
            {/* <h1 className={styles['our-services__header']}>
                Our services
            </h1> */}
            <div
            ref={servicesRef} 
            className={styles['our-services__inner-container']}>
                <div className={styles['our-services']}>
                {
                    services.map(el => {
                        return <OurService
                                content={el.content}
                                key={el.title}
                                title={el.title}
                                image={el.image}
                                duration={el.duration}/>
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default OurServices
