import React, { ChangeEvent, FC, useEffect, useRef } from 'react'
import styles from './TextField.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type Props = {
    /** Text inside input */
    value: string
    /** Function to be called after typing in input */
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    /** Variants of input design. Options are: outlined, filled, standard */
    variant?: 'outlined' | 'filled' | 'standard'
    /** Text ot be used as input placeholder */
    label?: string
    /** Set disabled state */
    disabled?: boolean
    /** Text to be used as error */
    error?: string
    /** If true, width will be 100%, if false - input default width */
    fullWidth?: boolean
    /** Prop to be used only inside Select component */
    select?: boolean
    /** Set read only state */
    readOnly?: boolean
}

/** Styled variant on html input. Component must be controlled */
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
