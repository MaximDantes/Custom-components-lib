import React, { ChangeEvent, FC, useRef } from 'react'
import styles from './Switch.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type Props = {
    /** Set checked state */
    checked: boolean
    /** Function to be called after click on checkbox */
    onChange: (checked: boolean) => void
    /** Text to display after checkbox */
    label?: string
    /** Set disabled state */
    disabled?: boolean
}

/** Input widget that allows user one of two values: on of off */
const Switch: FC<Props> = ({ checked, onChange, label, disabled }) => {
    const ref = useRef<HTMLSpanElement>()

    const className = cx({ container: true, checked, disabled })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.checked)
    }

    const handleFocus = () => {
        ref.current.classList.add(styles.focused)
    }

    const handleBlur = () => {
        ref.current.classList.remove(styles.focused)
    }

    return (
        <label className={className}>
            <span className={styles['switch-container']} ref={ref}>
                <span className={styles.track} />

                <span className={styles.circle} />
            </span>

            {label}

            <input
                className={styles.input}
                type={'checkbox'}
                role={'switch'}
                disabled={disabled}
                checked={checked}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex={disabled ? -1 : undefined}
            />
        </label>
    )
}

export default Switch
