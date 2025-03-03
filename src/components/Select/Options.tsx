import React, { forwardRef, MouseEvent } from 'react'
import styles from './Options.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export type Option = {
    value: number | string | null
    title: string
}

type Props = {
    options: Option[]
    onSelect: (value: string | number | null) => void
    selectedValue: number | string | null
    userSelection: number
    fullWidth?: boolean
}
const Options = forwardRef<HTMLDivElement, Props>(
    ({ options, onSelect, selectedValue, userSelection, fullWidth }, ref) => {
        const className = cx({
            ['options-container']: true,
            ['full-width']: fullWidth,
        })

        const handleMouseDown = (e: MouseEvent) => {
            e.preventDefault()
        }

        const handleClick = (value: string | number | null) => {
            onSelect(value)
        }

        return (
            <div className={className} ref={ref} onMouseDown={handleMouseDown}>
                {options.map((item, index) => {
                    const className = cx({
                        option: true,
                        selected: item.value === selectedValue,
                        ['user-selected']: index === userSelection,
                    })

                    return (
                        <option
                            className={className}
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
    }
)
Options.displayName = 'Options'

export default Options
