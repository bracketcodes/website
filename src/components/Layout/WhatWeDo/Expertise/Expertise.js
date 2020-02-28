import React from 'react'
import styles from './Expertise.module.css'

const Expertise = (props) => {

    let descriptorClassNames = [styles['what-we-do__descriptor']]
    let dropoutClassNames = [styles['dropout']]
    let logo = null
    
    if(props.expertise === 'Technology') {
        descriptorClassNames.push(styles['tech'])
        dropoutClassNames.push(styles['dropout__tech'])
    }

    if(props.expertise === 'Business') {
        descriptorClassNames.push(styles['business'])
        dropoutClassNames.push(styles['dropout__business'])
    }
    
    if(props.expertise === 'Math') {
        descriptorClassNames.push(styles['math'])
        dropoutClassNames.push(styles['dropout__math'])
        logo = (<p className={styles['math__logo']}>
                    {props.logo}
                </p>
                )
    }

    return (
        <div className={descriptorClassNames.join(' ')}>
            <div className={dropoutClassNames.join(' ')}>
            </div>
                {logo}
                <p>
                    {props.expertise}
                </p>
        </div>
    )
}

export default Expertise
