import React, { FC, useLayoutEffect, useRef, useState } from 'react'
import TextField from '@/components/TextField/TextField'
import { createPortal } from 'react-dom'
import styles from './Select.module.scss'
import Options, { Option } from '@/components/Select/Options'

type Props = {
    variant?: 'outlined' | 'filled' | 'standard'
    options?: Option[]
    label?: string
    fullWidth?: boolean
}

const Select: FC<Props> = (props) => {
    const [value, setValue] = useState<string | number | undefined>(2)
    const [open, setOpen] = useState(false)
    const container = useRef<HTMLDivElement>()
    const optionsContainer = useRef<HTMLDivElement>()

    useLayoutEffect(() => {
        if (!open) return
        optionsContainer.current.style.setProperty('--y', container.current.getBoundingClientRect().bottom + 'px')
        optionsContainer.current.style.setProperty('--x', container.current.getBoundingClientRect().left + 8 + 'px')
        optionsContainer.current.style.setProperty('--width', container.current.clientWidth + 'px')
    }, [open])

    const handleClick = () => {
        setOpen(true)
    }

    return (
        <>
            <div ref={container} className={styles.container} onClick={handleClick}>
                <TextField
                    variant={props.variant}
                    label={props.label}
                    fullWidth={props.fullWidth}
                    value={String(value)}
                    onChange={() => {}}
                    select
                />
            </div>

            {open &&
                createPortal(
                    <Options
                        options={props.options}
                        selectedValue={value}
                        ref={optionsContainer}
                        onSelect={(value) => setValue(value)}
                        onClose={() => setOpen(false)}
                    />,
                    document.body
                )}
        </>
    )
}

export default Select
