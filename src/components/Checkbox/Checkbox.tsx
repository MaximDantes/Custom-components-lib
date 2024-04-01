import React, { ChangeEvent, FC, useRef } from 'react'
import styles from './Checkbox.module.scss'
import Icon from './checked-icon.svg'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type Props = {
    /** Set checked state */
    checked: boolean
    /** Function to be called after click on checkbox */
    onChange: (checked: boolean) => void
    /** Set disabled state */
    disabled?: boolean
    /** Text to be displayed after checkbox */
    label?: string
}

/** Styled variant on html checkbox. Component must be controlled */
const Checkbox: FC<Props> = ({ checked, onChange, disabled, label }) => {
    //TODO animation
    const ref = useRef<HTMLLabelElement>()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (disabled) return

        // ref.current.blur()

        ref.current.classList.add(styles.animated)
        onChange?.(e.target.checked)
    }

    const handleAnimationEnd = () => {
        ref.current.classList.remove(styles.animated)
    }

    const handleFocus = () => {
        ref.current.classList.add(styles.focused)
    }

    const handleBlur = () => {
        ref.current.classList.remove(styles.focused)
    }

    const containerClassName = cx({ container: true, disabled })
    const checkboxClassName = cx({ checkbox: true, unchecked: !checked })

    return (
        <label className={containerClassName}>
            <input
                checked={checked}
                disabled={disabled}
                type={'checkbox'}
                className={styles.input}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex={disabled ? -1 : undefined}
            />

            <span className={checkboxClassName} ref={ref} onAnimationEnd={handleAnimationEnd}>
                <Icon className={styles.icon} />
            </span>

            <span className={styles.label}>{label}</span>
        </label>
    )
}

export default Checkbox
