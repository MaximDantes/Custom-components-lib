import React, { ChangeEvent, FC, useEffect, useRef } from 'react'
import styles from './TextField.module.scss'

type Props = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    variant?: 'outlined' | 'filled' | 'standard'
    label?: string
    disabled?: boolean
    error?: string
    fullWidth?: boolean
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

    const textFieldStyles = [styles['text-field']]
    if (props.variant) {
        textFieldStyles.push(styles[props.variant])
    } else {
        textFieldStyles.push(styles.outlined)
    }

    const containerStyles = [styles.container]
    if (props.error) {
        containerStyles.push(styles.error)
    }
    if (props.fullWidth) {
        containerStyles.push(styles['full-width'])
    }
    if (props.disabled) {
        containerStyles.push(styles.disabled)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.disabled) return

        props.onChange(e)
    }

    return (
        <div className={containerStyles.join(' ')}>
            <div className={textFieldStyles.join(' ')} ref={ref}>
                {props.label && <label className={styles.label}>{props.label}</label>}

                <input
                    className={styles.input}
                    value={value}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    disabled={props.disabled}
                />
            </div>

            <label className={styles['error-text']}>{props.error}</label>
        </div>
    )
}

export default TextField
