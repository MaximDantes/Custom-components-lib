import React, { FC, KeyboardEvent, MouseEvent, ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.scss'

type Props = {
    /** Set open state */
    open: boolean
    /** Function to be called after click on modal background or Escape press */
    onClose: () => void
    /** Element to be displayed inside modal */
    children?: ReactNode
}

/** Component to show inner content above entire window. Content must be provided as children */
const Modal: FC<Props> = ({ open, onClose, children }) => {
    const trigger = useRef<HTMLButtonElement>()
    const initialFocus = useRef<HTMLDivElement>()
    const container = useRef<HTMLDivElement>()
    const closeButton = useRef<HTMLButtonElement>()

    useEffect(() => {
        if (open) {
            trigger.current = document.activeElement as HTMLButtonElement
            initialFocus.current.focus()
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.body.style.removeProperty('overflow')
            trigger.current?.focus()
            trigger.current = null
        }
    }, [open])

    if (!open) return

    const handleKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
        if (e.key === 'Escape') {
            onClose()
        }
    }

    const handleClick = (e: MouseEvent<HTMLInputElement>) => {
        if (e.target === e.currentTarget) {
            onClose()
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
        <dialog open data-testid={'modal'} aria-modal className={styles.modal} onKeyDown={handleKeyDown} tabIndex={-1}>
            <div ref={initialFocus} tabIndex={-1} aria-hidden onKeyDown={moveFocusToEnd} />

            <div ref={container} className={styles.container} onKeyDown={moveFocusToEnd} onClick={handleClick}>
                {children}
            </div>

            <button
                ref={closeButton}
                aria-label={'close'}
                className={styles['close-button']}
                onClick={onClose}
                onKeyDown={moveFocusToStart}
            />
        </dialog>
    )

    return createPortal(modal, document.body)
}

export default Modal
