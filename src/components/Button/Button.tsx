import React, { DOMAttributes, FC, ReactNode, MouseEvent, useRef } from 'react'
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
    const ref = useRef<HTMLButtonElement>()

    const classNames = [styles.button, styles.pulse]

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

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        ref.current.style.setProperty('--x', e.nativeEvent.offsetX + 'px')
        ref.current.style.setProperty('--y', e.nativeEvent.offsetY + 'px')
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        ref.current.blur()
        e.preventDefault()
    }

    return (
        <button
            ref={ref}
            {...props}
            className={classNames.join(' ')}
            tabIndex={tabIndex ?? 0}
            type={type ?? 'button'}
            role={'button'}
            disabled={disabled}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
        >
            {startIcon && <span className={styles.icon}>{startIcon}</span>}

            <span>{children}</span>

            {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </button>
    )
}

export default Button
