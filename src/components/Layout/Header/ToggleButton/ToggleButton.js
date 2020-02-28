import React from 'react'

import styles from './ToggleButton.module.css'

const ToggleButton = (props) => {

    return (
        <div onClick={props.click} className={styles['toggle-button']}>
            <div className={styles['toggle-button__blocks']}/>
            <div className={styles['toggle-button__blocks']}/>
            <div className={styles['toggle-button__blocks']}/>
        </div>
    )
}

export default ToggleButton
