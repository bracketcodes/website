import React from 'react'

import styles from './WeCreate.module.css'

const WeCreate = (props) => {
    
    return (
        <div className={styles['we-build']}>
            <div className={styles['we-create__article']}>
                <article>
                    <ul>
                        <li className={styles['we-create__article--first']}>
                            We build tools and services that unchain people to 
                            connect, collabarate and create.
                        </li>
                        <li className={styles['we-create__article--first']}>
                            We create digital products, services which helps to solve your
                            business problem and generate revenue.
                        </li>
                    </ul>
                </article>
            </div>
            <div className={styles['we-create__image']}>
                <img src={require('../../../assets/undraw_dev_focus_b9xo.png')}/>
            </div>
        </div>
    )
}

export default WeCreate
