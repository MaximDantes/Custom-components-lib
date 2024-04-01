import React, { ChangeEvent, FC } from 'react'
import '@/App.module.scss'
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
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (disabled) return

        onChange?.(e.target.checked)
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
                tabIndex={disabled ? -1 : undefined}
            />

            <span className={checkboxClassName}>
                <Icon className={styles.icon} />
            </span>

            <span className={styles.label}>{label}</span>
        </label>
    )
}

export default Checkbox
