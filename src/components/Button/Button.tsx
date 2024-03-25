import React, { FC, ReactNode, MouseEvent, useRef } from 'react'
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
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}>

const Button: FC<Props> = (props) => {
    const ref = useRef<HTMLButtonElement>()

    const classNames = [styles.button]

    if (props.variant) {
        classNames.push(styles[props.variant])
    } else {
        classNames.push(styles.contained)
    }

    if (props.size) {
        classNames.push(styles[props.size])
    } else {
        classNames.push(styles.medium)
    }

    if (props.disabled) classNames.push(styles.disabled)

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        ref.current.style.setProperty('--x', e.nativeEvent.offsetX + 'px')
        ref.current.style.setProperty('--y', e.nativeEvent.offsetY + 'px')
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (e.nativeEvent.detail) {
            //only mouse click
            ref.current.blur()
        }

        props.onClick?.(e)
    }

    return (
        <button
            ref={ref}
            className={classNames.join(' ')}
            tabIndex={props.tabIndex ?? 0}
            type={props.type ?? 'button'}
            role={'button'}
            disabled={props.disabled}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
        >
            {props.startIcon && <span className={styles.icon}>{props.startIcon}</span>}
            <span>{props.children}</span>

            {props.endIcon && <span className={styles.icon}>{props.endIcon}</span>}
        </button>
    )
}

export default Button
