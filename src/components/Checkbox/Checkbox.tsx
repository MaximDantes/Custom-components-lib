import React, { ChangeEvent, FC, useRef } from 'react'
import styles from './Checkbox.module.scss'
import Icon from './checked-icon.svg'

type Props = {
    checked: boolean
    onChange: (checked: boolean) => void
    disabled?: boolean
    label?: string
}

const Checkbox: FC<Props> = (props) => {
    //TODO animation
    const ref = useRef<HTMLLabelElement>()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.disabled) return

        // ref.current.blur()

        ref.current.classList.add(styles.animated)
        props.onChange?.(e.target.checked)
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

    const containerStyles = [styles.container]
    if (props.disabled) containerStyles.push(styles.disabled)

    const checkboxStyles = [styles.checkbox]
    if (!props.checked) checkboxStyles.push(styles.unchecked)

    return (
        <label className={containerStyles.join(' ')}>
            <input
                checked={props.checked}
                disabled={props.disabled}
                type={'checkbox'}
                className={styles.input}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex={props.disabled ? -1 : undefined}
            />

            <span className={checkboxStyles.join(' ')} ref={ref} onAnimationEnd={handleAnimationEnd}>
                <Icon className={styles.icon} />
            </span>

            <span className={styles.label}>{props.label}</span>
        </label>
    )
}

export default Checkbox
