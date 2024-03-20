import React, { ButtonHTMLAttributes, FC } from 'react'
import styles from './Button.module.scss'

type Props = {
    variant?: 'primary' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = (props) => {
    return (
        <button className={props.variant === 'secondary' ? styles.secondary : styles.primary} {...props}>
            {props.children}
        </button>
    )
}

export default Button
