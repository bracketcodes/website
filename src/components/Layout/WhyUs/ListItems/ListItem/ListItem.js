import React, {useState, useEffect} from 'react'

import styles from './ListItem.module.css'

const ListItem = (props) => {

    return (
            <li onClick={() => {props.click(props.id)}}
                 className={styles['why-us__toggle--reasons']}>
                <label className={props.currReason === props.id ? styles['black'] : null}>
                    {props.label}
                </label>
            </li>
    )
}

export default ListItem
