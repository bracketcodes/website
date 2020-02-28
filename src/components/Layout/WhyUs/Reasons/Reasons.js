import React, {useState} from 'react'

import Aux from '../../../Hoc/Auxillary'
import styles from './Reasons.module.css'

const Reasons = (props) => {

    const [reasonsActive, setReasonsActive] = useState(false)

    let reasonsClassNames = [styles['back-shadow'], styles['creativity-background']] 

    if(reasonsActive) {
        reasonsClassNames.push(styles['back-shadow__hover'])
    }

    let reason = (
        <Aux>
            <p> We believe being creative, enable us to visualise hidden patterns, 
                make connections between things that aren’t normally related, and come 
                up with new ideas.
            </p> 
            <p> Creative ability depends on creative thinking which is 
                part of hard work but largely creative problem-solving.
            </p>
        </Aux>
    )

    if(props.reason === 2) {
        reasonsClassNames.push(styles['consistency-background'])
        reason = (
                    <Aux> 
                        <p>
                            We've strived to stay consistent about consistency. 
                            Even the best business plans will fail without a 
                            dedication to consistency.
                        </p>
                        <p> 
                            Consistency is power, and it is what inspires success.
                        </p>
                    </Aux>
                )
    }

    if(props.reason === 3) {
        reasonsClassNames.push(styles['quality-background'])
        reason = (
                <Aux>
                    <p>
                        Our key directive is complete customer satisfaction.We provide 
                        our customers with product and services that confirm to all 
                        requirements. 
                    </p>
                    <p>
                        We are fully committed to continuous improvement as a strategic
                        approach to achieve these quality objectives.
                    </p>
                </Aux>
        )
    }

    return (
        <div onMouseOver={() => {setReasonsActive(!reasonsActive)}}
             onMouseOut={() => {setReasonsActive(!reasonsActive)}} 
            className={styles['creativity'] }>
            <div className={reasonsClassNames.join(' ')}>
            </div>
            <div className={styles['reason__article']}>
                {reason}                
            </div>
        </div>
    )
}

export default Reasons
