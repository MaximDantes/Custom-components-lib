import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styles from './Button.module.scss'

type Props = {
    variant?: 'text' | 'contained' | 'outlined'
    startIcon?: ReactNode
    endIcon?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = (props) => {
    const classNames = [styles.button]

    if (props.variant) {
        classNames.push(styles[props.variant])
    } else {
        classNames.push(styles.contained)
    }

    return (
        <button className={classNames.join(' ')} {...props}>
            {props.startIcon}
            {props.children}
            {props.endIcon}
        </button>
    )
}

export default Button
