import React, {useState} from 'react'
import ToggleButton from './ToggleButton/ToggleButton'

import styles from './Header.module.css'
import MobileNav from './Navigation/MobileNav/MobileNav'
import Aux from '../../Hoc/Auxillary'
import Navigation from './Navigation/Navigation'

const Header = (props) => {
    const [isMobileNav, setIsMobileNav] = useState(false)
    let backdropClassName = [styles['backdrop']]

    const toggleMobileNav = () => {
        setIsMobileNav(!isMobileNav)
    }

    if(isMobileNav) {
        backdropClassName.push(styles['backdrop__display'])
    }

    return (
        <Aux>
            <div onClick={() => { toggleMobileNav ()} } 
            className={backdropClassName.join(' ')}>
            </div>
            <header className={styles['main-header__container']}>
                <div className={styles['main-header']}>
                    <div className={styles['toggle-button-logo__container']}>
                        <ToggleButton click={toggleMobileNav}/>
                        <img src={require('../../../assets/BC.svg')} alt=''/>
                    </div>
                    <Navigation/>
                </div>
            </header>
            <MobileNav click={toggleMobileNav} isMobileNav={isMobileNav}/>
        </Aux>
    )
}

export default Header
