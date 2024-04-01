import React, { FC, MouseEvent, ReactNode, useRef } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames/bind'

type Props = Partial<{
    /** Variant of button design. Options are: text, contained, outlined */
    variant: 'text' | 'contained' | 'outlined'
    /** Variant of button size/ Options are small, medium, large */
    size: 'small' | 'medium' | 'large'
    /** Set button disabled state */
    disabled: boolean
    /** Icon to be used before button text */
    startIcon: ReactNode
    /** Icon to be used before button text */
    endIcon: ReactNode
    /** Text to be displayed inside button */
    children: string
    /** If not provided, tab index will be undefined */
    tabIndex: number
    /** Variants of button type. Options are: button, submit, reset */
    type: 'button' | 'submit' | 'reset'
    /** Function to be called after click on button */
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}>

const cx = classNames.bind(styles)

/** Styled variant of html button */
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
