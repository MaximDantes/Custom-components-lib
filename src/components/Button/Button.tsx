import React, { FC, MouseEvent, ReactNode, useRef } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'

type Props = Partial<{
    variant: 'text' | 'contained' | 'outlined'
    size: 'small' | 'medium' | 'large'
    disabled: boolean
    startIcon: ReactNode
    endIcon: ReactNode
    children: ReactNode
    tabIndex: number
    type: 'button' | 'submit' | 'reset'
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}>

const cx = classNames.bind(styles)

const Button: FC<Props> = ({ variant, size, disabled, startIcon, endIcon, children, tabIndex, type, onClick }) => {
    const ref = useRef<HTMLButtonElement>()

    const className = cx({
        button: true,
        contained: !variant,
        [variant]: variant,
        medium: !size,
        [size]: size,
        disabled,
    })

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        ref.current.style.setProperty('--x', e.nativeEvent.offsetX + 'px')
        ref.current.style.setProperty('--y', e.nativeEvent.offsetY + 'px')
    }

    return (
        <button
            ref={ref}
            className={className}
            tabIndex={tabIndex ?? undefined}
            type={type ?? 'button'}
            disabled={disabled}
            onMouseMove={handleMouseMove}
            onClick={onClick}
        >
            {startIcon && <span className={styles.icon}>{startIcon}</span>}

            <span>{children}</span>

            {endIcon && <span className={styles.icon}>{endIcon}</span>}
        </button>
    )
}

export default Button
