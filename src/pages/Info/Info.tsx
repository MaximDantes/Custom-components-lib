import React, { FC } from 'react'
import Cloud from './../../assets/cloud-fog-svgrepo-com.svg'
import styles from './Info.module.scss'

const Info: FC = () => {
    return (
        <div className={styles.image}>
            <p>{__PLATFORM__}</p>
            <Cloud className={styles.icon} />
        </div>
    )
}

export default Info
