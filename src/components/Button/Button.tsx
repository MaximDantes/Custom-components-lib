import React, { FC, MouseEvent, ReactNode, useRef } from 'react'
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

    return (
        <button
            ref={ref}
            className={classNames.join(' ')}
            tabIndex={props.tabIndex ?? undefined}
            type={props.type ?? 'button'}
            disabled={props.disabled}
            onMouseMove={handleMouseMove}
            onClick={props.onClick}
        >
            {props.startIcon && <span className={styles.icon}>{props.startIcon}</span>}
            <span>{props.children}</span>

            {props.endIcon && <span className={styles.icon}>{props.endIcon}</span>}
        </button>
    )
}

export default Button
