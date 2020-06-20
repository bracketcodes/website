import React from 'react'

import styles from './WeCreate.module.css'

const WeCreate = (props) => {
    
    return (
        <div className={styles['we-build']}>
            <div className={styles['we-create__article']}>
                <article>
                    <p className={styles['we-create__article--first']}>
                        <b>We create </b> tools and services that unchain people to 
                        connect, collabarate and create.
                    </p>
                    <p className={styles['article--second']}>We believe in <b>creativity.</b></p>
                </article>
            </div>
            <div className={styles['we-create__image']}>
                <img src={require('../../../assets/undraw_dev_focus_b9xo.png')}/>
            </div>
        </div>
    )
}

export default WeCreate
