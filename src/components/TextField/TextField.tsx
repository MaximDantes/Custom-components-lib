import React, { ChangeEvent, FC } from 'react'
import styles from './TextField.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type Props = Partial<{
    /** Text inside input */
    value: string
    /** Function to be called after typing in input */
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    /** Variants of input design. Options are: outlined, filled, standard */
    variant: 'outlined' | 'filled' | 'standard'
    /** Text ot be used as input placeholder */
    label: string
    /** Set disabled state */
    disabled: boolean
    /** Text to be used as error */
    error: string
    /** If true, width will be 100%, if false - input default width */
    fullWidth: boolean
    /** Name of css class to override default settings */
    className: string
    /** Set read only state */
    readOnly: boolean
}>

/** Styled variant of html input */
export const TextField: FC<Props> = ({
    value,
    onChange,
    variant,
    label,
    disabled,
    error,
    fullWidth,
    className,
    readOnly,
}) => {
    const containerClassName = cx({
        container: true,
        error,
        ['full-width']: fullWidth,
        disabled,
        [className]: className,
    })

    const textFieldClassName = cx({
        ['text-field']: true,
        outlined: !variant,
        [variant]: variant,
        fieldset: variant === 'outlined',
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (disabled || readOnly) return

        onChange?.(e)
    }

    const inner = (
        <>
            <input
                className={styles.input}
                value={disabled ? '' : value === undefined ? undefined : value}
                onChange={handleChange}
                disabled={disabled}
                role={className && 'combobox'}
                readOnly={readOnly}
                placeholder={''}
            />

            {label && (
                <>
                    {variant === 'outlined' && <legend className={styles.legend}>{label}</legend>}
                    <label className={styles.label}>{label}</label>
                </>
            )}
        </>
    )

    return (
        <div className={containerClassName}>
            {variant === 'outlined' ? (
                <fieldset className={textFieldClassName}>{inner}</fieldset>
            ) : (
                <div className={textFieldClassName}>{inner}</div>
            )}
            <label className={styles['error-text']}>{error}</label>
        </div>
    )
}
