import React from 'react'

import styles from './OurServices.module.css'
import OurService from './OurService/OurService'
import * as constants from '../../../constants/constants'


const OurServices = (props) => {

    let servicesRef = React.useRef()
    let services = [{title: 'Machine Learning', image: 'ml_4.PNG', duration: '1000', content: constants.SERVICE.ML},
                    {title: 'Deep Learning', image: 'ml_3.png', duration: '1500', content: constants.SERVICE.DEEP_LEARNING},
                    // {title: 'Quantitative Analytics', image: 'analytics.png', duration: '2000', content: constants.SERVICE.ANALYTICS},
                    {title: 'Web Application', image: 'web_app.png', duration: '2500', content: constants.SERVICE.APPLICATION}, 
                    {title: 'Web Designing', image: 'web_design.png', duration: '2750', content: constants.SERVICE.WEBDESIGN}, 
                    {title: 'Mobile Application', image: 'mobile_app.png', duration: '3000', content: constants.SERVICE.MOBILE_APP}] 
    
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
            <h1 className={styles['our-services__header']}>
                Our services
            </h1>
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
