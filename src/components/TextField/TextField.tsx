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

    useEffect(() => {
        if (props.value) {
            ref.current.classList.add(styles.notEmpty)
            return
        }

        if (!ref.current.classList.contains(styles.focused)) {
            ref.current.classList.remove(styles.notEmpty)
        }
    }, [props.value])
    const handleFocus = () => {
        ref.current.classList.add(styles.focused)
        ref.current.classList.add(styles.notEmpty)
    }

    const handleBlur = () => {
        if (!props.value) {
            ref.current.classList.remove(styles.notEmpty)
        }
        ref.current.classList.remove(styles.focused)
    }

    const containerStyles = [styles.textField]
    if (props.variant) {
        containerStyles.push(styles[props.variant])
    } else {
        containerStyles.push(styles.outlined)
    }
    if (props.fullWidth) {
        containerStyles.push(styles.fullWidth)
    }

    return (
        <div className={containerStyles.join(' ')} ref={ref}>
            {props.label && <label className={styles.label}>{props.label}</label>}

            <input
                className={styles.input}
                value={props.value}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={props.onChange}
            />

            {props.error && <label>{props.error}</label>}
        </div>
    )
}

export default TextField
