import React from 'react'

import styles from './ContactUs.module.css'

const ContactUs = (props) => {
    const [isModal, setIsModal] = React.useState(false)

    return (
        <>
            <div
            onClick={() => {setIsModal(true)}} 
            className={styles['contact-us']}> 
                <p>
                    Contact us
                </p>
            </div>
            {
                isModal ? 
                    <div
                    onClick={() => {setIsModal(false)}} 
                    className={styles['backdrop']}>
                            
                        <div
                        data-aos="zoom-in" 
                        className={styles['contact-us__container']}>
                            <div
                            onClick={() => {setIsModal(false)}} 
                            className={styles['image-container']}>
                                <img src={require('../../../assets/close_2.png')}/>
                            </div>
                            <div className={styles['detail']}>
                                <p>e-mail :</p>       
                                <p>bracketcodes@gmail.com</p>
                            </div>
                            <div className={styles['detail']}>
                                <p>phone :</p> 
                                <p>+91 9790054083, +91 9786535793</p>
                            </div>
                        </div>
                    </div>: null
            }
        </> 
    )
}

export default ContactUs
