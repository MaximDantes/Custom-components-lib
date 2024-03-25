import React, { ChangeEvent, FC, useRef } from 'react'
import styles from './Checkbox.module.scss'
import Icon from './checked-icon.svg'

type Props = Partial<{
    checked: boolean
    disabled: boolean
    label: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}>

const Checkbox: FC<Props> = (props) => {
    //TODO animation
    const ref = useRef<HTMLLabelElement>()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.disabled) return

        ref.current.blur()

        ref.current.classList.add(styles.animated)
        props.onChange?.(e)
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
