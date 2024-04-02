import React, { ChangeEvent, FC } from 'react'
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
export const Switch: FC<Props> = ({ checked, onChange, label, disabled }) => {
    const className = cx({ container: true, checked, disabled })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.checked)
    }

    return (
        <label className={className}>
            <input
                className={styles.input}
                type={'checkbox'}
                role={'switch'}
                disabled={disabled}
                checked={checked}
                onChange={handleChange}
                tabIndex={disabled ? -1 : undefined}
            />

            <span className={styles['switch-container']}>
                <span className={styles.track} />

                <span className={styles.circle} />
            </span>

            {label}
        </label>
    )
}
