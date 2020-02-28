import React from 'react'

import styles from './Motto.module.css' 

const Motto = () => {
    return (
        <div className={styles['motto']}>
                <h1>We Create.</h1>
                <img src={require('../../../assets/brainy.png')}/>
        </div>
    )
}

export default Motto
