import React, { forwardRef } from 'react'
import styles from './Options.module.scss'

export type Option = { value: number | string; title: string }

type Props = {
    options: Option[]
    onSelect: (selectedValue: string | number) => void
    onClose: () => void
    selectedValue?: number | string
}
const Options = forwardRef<HTMLDivElement, Props>((props, ref) => {
    return (
        <div className={styles['options-container']} ref={ref}>
            {props.options.map((item) => {
                const classList = [styles.option]
                if (item.value === props.selectedValue) {
                    classList.push(styles.selected)
                }

                const handleClick = () => {
                    props.onSelect(item.value)
                }

                return (
                    <option className={classList.join(' ')} key={item.value} value={item.value} onClick={handleClick}>
                        {item.title}
                    </option>
                )
            })}
        </div>
    )
})
Options.displayName = 'Options'

export default Options
