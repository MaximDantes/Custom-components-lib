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

const TextField: FC<Props> = (props) => {
    const ref = useRef<HTMLDivElement>()
    const value = props.disabled ? '' : props.value

    useEffect(() => {
        if (props.value) {
            ref.current.classList.add(styles['not-empty'])
            return
        }

        if (!ref.current.classList.contains(styles.focused)) {
            ref.current.classList.remove(styles['not-empty'])
        }
    }, [value, props.variant])

    const handleFocus = () => {
        if (props.disabled) return

        ref.current.classList.add(styles.focused)
        ref.current.classList.add(styles['not-empty'])
    }

    const handleBlur = () => {
        if (!props.value) {
            ref.current.classList.remove(styles['not-empty'])
        }
        ref.current.classList.remove(styles.focused)
    }

    const containerClassName = cx({
        container: true,
        error: props.error,
        ['full-width']: props.fullWidth,
        disabled: props.disabled,
        select: props.select,
    })

    const textFieldClassName = cx({
        ['text-field']: true,
        outlined: !props.variant,
        [props.variant]: props.variant,
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.disabled || props.readOnly) return

        props.onChange(e)
    }

    return (
        <div className={containerClassName}>
            <div className={textFieldClassName} ref={ref}>
                {props.label && <label className={styles.label}>{props.label}</label>}

                <input
                    className={styles.input}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    disabled={props.disabled}
                    role={props.select && 'select'}
                    readOnly={props.readOnly}
                />
            </div>

            <label className={styles['error-text']}>{props.error}</label>
        </div>
    )
}

export default TextField
