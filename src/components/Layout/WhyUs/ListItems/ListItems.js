import React from 'react'

import styles from './ListItems.module.css'
import ListItem from './ListItem/ListItem'

const ListItems = (props) => {

    let reasons = ['creativity', 'consistency', 'quality']

    return (
        <div className={styles['why-us__block']}>
            <ul className={styles['why-us__toggle']}>
                {
                   reasons.map((reason, index) => {
                    return <ListItem key={index + 1}
                        id = {index + 1}
                        click={props.click}
                        label={reason}
                        currReason={props.currReason}/>
                   }
                   ) 
                }   
            </ul>
        </div>
    )
}

export default ListItems
