import React, { DOMAttributes, FC, ReactNode } from 'react'
import styles from './Button.module.scss'

type Props = Partial<{
    variant: 'text' | 'contained' | 'outlined'
    size: 'small' | 'medium' | 'large'
    disabled: boolean
    startIcon: ReactNode
    endIcon: ReactNode
    children: ReactNode
    tabIndex: number
    type: 'button' | 'submit' | 'reset'
}> &
    DOMAttributes<HTMLButtonElement>

const Button: FC<Props> = ({ variant, size, disabled, startIcon, endIcon, tabIndex, children, type, ...props }) => {
    const classNames = [styles.button]

    if (variant) {
        classNames.push(styles[variant])
    } else {
        classNames.push(styles.contained)
    }

    if (size) {
        classNames.push(styles[size])
    } else {
        classNames.push(styles.medium)
    }

    if (disabled) classNames.push(styles.disabled)

    return (
        <button
            {...props}
            className={classNames.join(' ')}
            tabIndex={tabIndex ?? 0}
            type={type ?? 'button'}
            role={'button'}
            disabled={disabled}
        >
            {startIcon && <span className={styles.icon}>{startIcon}</span>}
            <span>{children}</span>
            {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </button>
    )
}

export default Button
