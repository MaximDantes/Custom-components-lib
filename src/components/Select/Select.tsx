import React, { FC, KeyboardEvent, useLayoutEffect, useRef, useState } from 'react'
import TextField from '@/components/TextField/TextField'
import { createPortal } from 'react-dom'
import Options, { Option } from '@/components/Select/Options'
import styles from './Select.module.scss'
import optionStyles from './Options.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type Props = {
    /** Set open state*/
    open: boolean
    /** Function to be called after click on input */
    onToggle: (open: boolean) => void
    /** Current value of input. Null means that input will be empty */
    value: string | number | null
    /** Function to be called after select of options */
    onChange: (value: string | number | null) => void
    /** Variants of option. Format is: { value: number | string | null, title: string } */
    options: Option[]
    /** Variants of input design. Options are: outlined | filled | standard */
    variant?: 'outlined' | 'filled' | 'standard'
    /** Text to be used as input placeholder */
    label?: string
    /** If true, width will be 100%, if false - input default width */
    fullWidth?: boolean
    /** Set disabled state */
    disabled?: boolean
}

/** Styled variant of html select. Component must be controlled. Options must be provided as prop */
const Select: FC<Props> = ({ open, onToggle, value, onChange, options, variant, label, fullWidth, disabled }) => {
    const [userSelection, setUserSelection] = useState(-1)

    const container = useRef<HTMLDivElement>()
    const optionsContainer = useRef<HTMLDivElement>()

    useLayoutEffect(() => {
        if (!open || disabled) return
        optionsContainer.current.style.setProperty('--y', container.current.getBoundingClientRect().bottom + 'px')
        optionsContainer.current.style.setProperty('--x', container.current.getBoundingClientRect().left + 8 + 'px')
        optionsContainer.current.style.setProperty('--width', container.current.clientWidth + 'px')
    }, [open])

    const className = cx({
        container: true,
        ['full-width']: fullWidth,
        open,
        disabled,
    })

    const handleClick = () => {
        onToggle(!open)
    }

    const handleSelect = (value: string | number | null) => {
        onChange(value)

        optionsContainer.current.classList.add(optionStyles.unmounted)

        setTimeout(() => {
            onToggle(false)
        }, 130)
    }

    const handleBlur = () => {
        onToggle(false)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.key === 'Space' || e.key === 'Enter') && !open) {
            onToggle(true)
            return
        }

        if (e.key === 'ArrowDown') {
            const newSelection = userSelection < options.length - 1 ? userSelection + 1 : 0
            setUserSelection(newSelection)
        }

        if (e.key === 'ArrowUp') {
            const newSelection = userSelection > 0 ? userSelection - 1 : options.length - 1
            setUserSelection(newSelection)
        }

        if (e.key === 'Enter') {
            onChange(userSelection > -1 ? options[userSelection].value : null)
            onToggle(false)
        }

        if (e.key === 'Escape') {
            onToggle(false)
        }
    }

    return (
        <>
            <div
                ref={container}
                className={className}
                onClick={handleClick}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
            >
                <TextField
                    variant={variant}
                    label={label}
                    fullWidth={fullWidth}
                    value={value === null ? '' : options.find((item) => item.value === value)?.title}
                    onChange={() => {}}
                    disabled={disabled}
                    select
                    readOnly
                />
            </div>

            {!disabled &&
                open &&
                createPortal(
                    <Options
                        options={options}
                        selectedValue={value}
                        ref={optionsContainer}
                        onSelect={handleSelect}
                        userSelection={userSelection}
                        fullWidth={fullWidth}
                    />,
                    document.body
                )}
        </>
    )
}

export default Select
