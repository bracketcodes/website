import React, {useEffect} from 'react'

import styles from './MobileNav.module.css'
import { NavLink } from 'react-router-dom'

const MobileNav = (props) => {    

    let navList = ['What We Do', 'Why us', 'About Us', 'Stay In Touch']
    let navIdList = ['#whatWeDo', '#whyUs', '#aboutUs', '#contactUs'] 
    let mobileNavContainerClassNames = [styles['mobile-nav__container']]
    
    if (props.isMobileNav == false) {
        mobileNavContainerClassNames.push(styles['mobile-nav__none'])
    }

    return (
        <div className={mobileNavContainerClassNames.join(' ')}>
            <ul className={styles['mobile-nav__items']}>
                {
                    navList.map((element, i) => {
                      return (
                          <li
                          key={element} 
                          className={styles['mobile-nav__item']}
                          onClick={props.click}>
                              <a href={navIdList[i]}>{element}</a>
                          </li>
                      )  
                    })
                }
            </ul>
        </div>
    )
}

export default MobileNav
