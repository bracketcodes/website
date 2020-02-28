import React, {useState} from 'react'

import styles from './WhyUs.module.css'
import Reasons from './Reasons/Reasons'
import ListItems from './ListItems/ListItems'

const WhyUs = () => {

    const [reason, setReason] = useState(1)

    let currReason = <Reasons reason={reason}/>

    return (
        <div id='whyUs' className={styles['why-us']}>
            <div className={styles['why-us__list']}>
                <h1 className={styles['why-us__header']}>Why us</h1>
                <ListItems click={setReason} currReason={reason}/>
            </div>
            <div className={styles['why-us__reasons']}>
                {currReason}
            </div>
        </div>
    )
}

export default WhyUs