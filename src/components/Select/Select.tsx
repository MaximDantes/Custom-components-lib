import React, { FC, KeyboardEvent, useLayoutEffect, useRef, useState } from 'react'
import TextField from '@/components/TextField/TextField'
import { createPortal } from 'react-dom'
import styles from './Select.module.scss'
import Options, { Option } from '@/components/Select/Options'

type Props = {
    open: boolean
    onToggle: (open: boolean) => void
    value: string | number | null
    onChange: (value: string | number | null) => void
    options: Option[]
    variant?: 'outlined' | 'filled' | 'standard'
    label?: string
    fullWidth?: boolean
}

const Select: FC<Props> = (props) => {
    const [userSelection, setUserSelection] = useState(-1)

    const container = useRef<HTMLDivElement>()
    const optionsContainer = useRef<HTMLDivElement>()

    useLayoutEffect(() => {
        if (!props.open) return
        optionsContainer.current.style.setProperty('--y', container.current.getBoundingClientRect().bottom + 'px')
        optionsContainer.current.style.setProperty('--x', container.current.getBoundingClientRect().left + 8 + 'px')
        optionsContainer.current.style.setProperty('--width', container.current.clientWidth + 'px')
    }, [props.open])

    const containerStyles = [styles.container]
    if (props.fullWidth) {
        containerStyles.push(styles['full-width'])
    }
    if (props.open) {
        containerStyles.push(styles.open)
    }

    const handleClick = () => {
        setUserSelection(-1)
        props.onToggle(!props.open)
    }

    const handleSelect = (value: string | number | null) => {
        props.onChange(value)
        props.onToggle(false)
    }

    const handleBlur = () => {
        props.onToggle(false)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
        if ((e.key === 'Space' || e.key === 'Enter') && !props.open) {
            setUserSelection(-1)
            props.onToggle(true)
            return
        }

        if (e.key === 'ArrowDown') {
            const newSelection = userSelection < props.options.length - 1 ? userSelection + 1 : 0
            setUserSelection(newSelection)
        }

        if (e.key === 'ArrowUp') {
            const newSelection = userSelection > 0 ? userSelection - 1 : props.options.length - 1
            setUserSelection(newSelection)
        }

        if (e.key === 'Enter') {
            props.onChange(userSelection > -1 ? props.options[userSelection].value : null)
            props.onToggle(false)
        }

        if (e.key === 'Escape') {
            props.onToggle(false)
        }
    }

    return (
        <>
            <div
                ref={container}
                className={containerStyles.join(' ')}
                onClick={handleClick}
                onBlur={handleBlur}
                onKeyDown={handleKeyDown}
            >
                <TextField
                    variant={props.variant}
                    label={props.label}
                    fullWidth={props.fullWidth}
                    value={props.value === null ? '' : props.options.find((item) => item.value === props.value)?.title}
                    onChange={() => {}}
                    select
                    readOnly
                />
            </div>

            {props.open &&
                createPortal(
                    <Options
                        options={props.options}
                        selectedValue={props.value}
                        ref={optionsContainer}
                        onSelect={handleSelect}
                        onClose={() => props.onToggle(false)}
                        userSelection={userSelection}
                        fullWidth={props.fullWidth}
                    />,
                    document.body
                )}
        </>
    )
}

export default Select
