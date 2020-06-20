import React, {useEffect} from 'react'

import styles from './MobileNav.module.css'
import { NavLink } from 'react-router-dom'

const MobileNav = (props) => {    

    let navList = ['What we do', 'Our Services', 'Why us', 'About us', 'Stay in touch']
    let navIdList = ['#whatWeDo', '#ourServices', '#whyUs', '#aboutUs', '#contactUs'] 
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
