import React from 'react'

import styles from './Navigation.module.css'
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {    

    let navList = ['What we do', 'Why us', 'About us', 'Stay in touch']
    let navIdList = ['#whatWeDo', '#whyUs', '#aboutUs', '#contactUs'] 

    return (
            <ul className={styles['main-nav__items']}>
                {
                    navList.map((element, i) => {
                      return (
                          <li
                          key={element} 
                          className={styles['main-nav__item']}>
                              <a href={navIdList[i]}>{element}</a>
                          </li>
                      )  
                    })
                }
            </ul>
    )
}

export default Navigation
