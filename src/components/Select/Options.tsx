import React, { forwardRef, MouseEvent } from 'react'
import styles from './Options.module.scss'

export type Option = {
    value: number | string | null
    title: string
}

type Props = {
    options: Option[]
    onSelect: (value: string | number | null) => void
    onClose: () => void
    selectedValue: number | string | null
    userSelection: number
    fullWidth?: boolean
}
const Options = forwardRef<HTMLDivElement, Props>((props, ref) => {
    const containerStyles = [styles['options-container']]
    if (props.fullWidth) {
        containerStyles.push(styles['full-width'])
    }

    const handleMouseDown = (e: MouseEvent) => {
        e.preventDefault()
    }

    const handleClick = (value: string | number | null) => {
        props.onSelect(value)
    }

    return (
        <div className={containerStyles.join(' ')} ref={ref} onMouseDown={handleMouseDown}>
            {props.options.map((item, index) => {
                const classList = [styles.option]
                if (item.value === props.selectedValue) {
                    classList.push(styles.selected)
                }
                if (index === props.userSelection) {
                    classList.push(styles['user-selected'])
                }

                return (
                    <option
                        className={classList.join(' ')}
                        key={item.value}
                        value={item.value}
                        onClick={() => handleClick(item.value)}
                    >
                        {item.title}
                    </option>
                )
            })}
        </div>
    )
})
Options.displayName = 'Options'

export default Options
