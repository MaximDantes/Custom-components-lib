import { beforeEach, describe, expect, jest } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FC, useState } from 'react'
import { Modal } from './'
import { Button } from '@/components/Button'

const getModal = () => screen.getByRole('dialog')

const ModalWithWrapper: FC = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setOpen(true)}>{'open'}</Button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div>
                    <Button>{'button 1'}</Button>
                    <Button>{'button 2'}</Button>
                </div>
                <Button>{'button 3'}</Button>
            </Modal>
        </>
    )
}

describe('Modal', () => {
    it('should render without errors', () => {
        render(<Modal open={true} onClose={() => {}} />)

        expect(getModal()).toBeInTheDocument()
    })

    it('should be closed', () => {
        render(<Modal open={false} onClose={() => {}} />)

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('should have provided content', () => {
        render(
            <Modal open={true} onClose={() => {}}>
                <p>{'some content'}</p>
            </Modal>
        )

        expect(screen.getByText('some content')).toBeInTheDocument()
    })

    it('should call onClose after click on background', async () => {
        const onClose = jest.fn()

        render(
            <Modal open={true} onClose={onClose}>
                <p>{'some content'}</p>
            </Modal>
        )

        await userEvent.click(screen.getByText('some content'))

        expect(onClose).not.toHaveBeenCalled()

        await userEvent.click(getModal().children[1])

        expect(onClose).toHaveBeenCalledTimes(1)
    })

    it('should call onClose after click on background', async () => {
        const onClose = jest.fn()

        render(
            <Modal open={true} onClose={onClose}>
                <p>{'some content'}</p>
            </Modal>
        )

        await userEvent.keyboard('[Escape]')

        expect(onClose).toHaveBeenCalledTimes(1)
    })
})

describe('Modal with wrapper', () => {
    const getOpenButton = () => screen.getByText('open')

    beforeEach(async () => {
        render(<ModalWithWrapper />)
        await userEvent.click(getOpenButton())
    })

    it('should open modal', async () => {
        expect(getModal()).toBeInTheDocument()
    })

    it('should move focus to modal', async () => {
        await userEvent.tab()

        expect(screen.getByText('button 1').parentElement).toHaveFocus()
    })

    it('should return focus to toggle button', async () => {
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.keyboard('[Escape]')

        expect(getOpenButton().parentElement).toHaveFocus()
    })

    it('should close modal on close button click', async () => {
        await userEvent.tab({ shift: true })
        await userEvent.keyboard('[Space]')

        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('should keep focus inside modal', async () => {
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.tab()
        await userEvent.tab()

        expect(screen.getByText('button 1').parentElement).toHaveFocus()

        await userEvent.tab({ shift: true })
        await userEvent.tab({ shift: true })
        await userEvent.tab({ shift: true })
        await userEvent.tab({ shift: true })

        expect(screen.getByText('button 1').parentElement).toHaveFocus()
    })
})
