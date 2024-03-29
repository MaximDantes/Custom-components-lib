import React, { ChangeEvent, FC, useEffect, useRef } from 'react'
import styles from './TextField.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type Props = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    variant?: 'outlined' | 'filled' | 'standard'
    label?: string
    disabled?: boolean
    error?: string
    fullWidth?: boolean
    select?: boolean
    readOnly?: boolean
}

const TextField: FC<Props> = ({ value, onChange, variant, label, disabled, error, fullWidth, select, readOnly }) => {
    const ref = useRef<HTMLDivElement>()
    const inputValue = disabled ? '' : value

    useEffect(() => {
        if (value) {
            ref.current.classList.add(styles['not-empty'])
            return
        }

        if (!ref.current.classList.contains(styles.focused)) {
            ref.current.classList.remove(styles['not-empty'])
        }
    }, [inputValue, variant])

    const handleFocus = () => {
        if (disabled) return

        ref.current.classList.add(styles.focused)
        ref.current.classList.add(styles['not-empty'])
    }

    const handleBlur = () => {
        if (!value) {
            ref.current.classList.remove(styles['not-empty'])
        }
        ref.current.classList.remove(styles.focused)
    }

    const containerClassName = cx({
        container: true,
        error,
        ['full-width']: fullWidth,
        disabled,
        select,
    })

    const textFieldClassName = cx({
        ['text-field']: true,
        outlined: !variant,
        [variant]: variant,
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (disabled || readOnly) return

        onChange(e)
    }

    return (
        <div className={containerClassName}>
            <div className={textFieldClassName} ref={ref}>
                {label && <label className={styles.label}>{label}</label>}

                <input
                    className={styles.input}
                    value={inputValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    disabled={disabled}
                    role={select && 'combobox'}
                    readOnly={readOnly}
                />
            </div>

            <label className={styles['error-text']}>{error}</label>
        </div>
    )
}

export default TextField
