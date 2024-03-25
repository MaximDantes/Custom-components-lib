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
    const ref = useRef<HTMLLabelElement>()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        ref.current.classList.add(styles.animated)
        props.onChange?.(e)
    }

    const handleAnimationEnd = () => {
        ref.current.classList.remove(styles.animated)
    }

    const containerStyles = [styles.container]
    if (!props.checked) containerStyles.push(styles.unchecked)

    return (
        <label className={containerStyles.join(' ')}>
            <input type={'checkbox'} className={styles.input} onChange={handleChange} />

            <span className={styles.checkbox} ref={ref} onAnimationEnd={handleAnimationEnd}>
                <Icon className={styles.icon} />
            </span>

            <span className={styles.label}>{props.label}</span>
        </label>
    )
}

export default Checkbox
