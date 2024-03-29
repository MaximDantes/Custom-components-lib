import React, { FC, ReactElement, useEffect, useRef, KeyboardEvent, MouseEvent } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'

type Props = {
    open: boolean
    onClose: () => void
    children?: ReactElement | ReactElement[]
}

const Modal: FC<Props> = (props) => {
    const trigger = useRef<HTMLButtonElement>()
    const initialFocus = useRef<HTMLDivElement>()
    const container = useRef<HTMLDivElement>()
    const closeButton = useRef<HTMLButtonElement>()

    useEffect(() => {
        if (props.open) {
            trigger.current = document.activeElement as HTMLButtonElement
            initialFocus.current.focus()
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.removeProperty('overflow')
            trigger.current?.focus()
            trigger.current = null
        }
    }, [props.open])
    if (!props.open) return

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Escape') {
            props.onClose()
        }
    }

    const handleClick = (e: MouseEvent<HTMLInputElement>) => {
        if (e.target === e.currentTarget) {
            props.onClose()
        }
    }

    const getFirstFocusable = () => {
        return container.current.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )[0] as HTMLButtonElement
    }

    const moveFocusToStart = (e: KeyboardEvent<HTMLButtonElement>) => {
        if (e.ctrlKey || e.altKey || e.shiftKey) return

        if (e.key === 'Tab') {
            e.preventDefault()
            getFirstFocusable().focus()
        }
    }

    const moveFocusToEnd = (e: KeyboardEvent<HTMLDivElement>) => {
        if (document.activeElement !== initialFocus.current) {
            if (document.activeElement !== getFirstFocusable()) return
        }

        if (e.ctrlKey || e.altKey) return

        if (e.key === 'Tab' && e.shiftKey) {
            e.preventDefault()
            closeButton.current.focus()
        }
    }

    const modal = (
        <div role={'dialog'} aria-modal className={styles.modal} onKeyDown={handleKeyDown}>
            <div ref={initialFocus} tabIndex={-1} aria-hidden onKeyDown={moveFocusToEnd} />

            <div ref={container} className={styles.container} onKeyDown={moveFocusToEnd} onClick={handleClick}>
                {props.children}
            </div>

            <button
                ref={closeButton}
                aria-label={'close'}
                className={styles['close-button']}
                onClick={props.onClose}
                onKeyDown={moveFocusToStart}
            />
        </div>
    )

    return createPortal(modal, document.body)
}

export default Modal
