import React, { ChangeEvent, FC, useRef } from 'react'
import styles from './Switch.module.scss'

type Props = {
    checked: boolean
    onChange: (checked: boolean) => void
    label?: string
    disabled?: boolean
}

const Switch: FC<Props> = (props) => {
    const ref = useRef<HTMLSpanElement>()

    const containerStyles = [styles.container]
    if (props.checked) {
        containerStyles.push(styles.checked)
    }
    if (props.disabled) {
        containerStyles.push(styles.disabled)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e.currentTarget.checked)
    }

    const handleFocus = () => {
        ref.current.classList.add(styles.focused)
    }

    const handleBlur = () => {
        ref.current.classList.remove(styles.focused)
    }

    return (
        <label className={containerStyles.join(' ')}>
            <span className={styles['switch-container']} ref={ref}>
                <span className={styles.track} />

                <span className={styles.circle} />
            </span>

            {props.label}

            <input
                className={styles.input}
                type={'checkbox'}
                role={'switch'}
                disabled={props.disabled}
                checked={props.checked}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                tabIndex={props.disabled ? -1 : undefined}
            />
        </label>
    )
}

export default Switch
