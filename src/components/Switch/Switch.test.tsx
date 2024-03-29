import { describe, expect, jest } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from './'

const getSwitch = () => screen.getByRole('switch')

describe('Switch', () => {
    it('should render without errors', () => {
        render(<Switch checked={false} onChange={() => {}} />)

        expect(getSwitch()).toBeInTheDocument()
    })

    it('should have provided label', () => {
        render(<Switch label={'some label'} checked={false} onChange={() => {}} />)

        expect(screen.getByText('some label')).toBeInTheDocument()
    })

    it('should have provided value', () => {
        render(<Switch checked={true} onChange={() => {}} />)

        expect(getSwitch()).toBeChecked()
    })

    it('should be available for tab selection', async () => {
        render(<Switch checked={false} onChange={() => {}} />)

        await userEvent.tab()

        expect(getSwitch()).toHaveFocus()
    })

    it('should call onChange on user click', async () => {
        const onChange = jest.fn()

        render(<Switch checked={false} onChange={onChange} />)

        await userEvent.click(getSwitch())

        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith(true)
    })

    it('should call onChange on Space press', async () => {
        const onChange = jest.fn()

        render(<Switch checked={true} onChange={onChange} />)

        await userEvent.tab()
        await userEvent.keyboard('[Space]')

        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith(false)
    })

    it('should call onChange after user click on label', async () => {
        const onChange = jest.fn()

        render(<Switch checked={false} onChange={onChange} label={'some label'} />)

        await userEvent.click(screen.getByText('some label'))

        expect(onChange).toHaveBeenCalledTimes(1)
    })

    it('should be disabled', () => {
        render(<Switch disabled checked={false} onChange={() => {}} />)

        expect(getSwitch()).toHaveAttribute('disabled')
    })

    it('should not call onChange if switch is disabled', async () => {
        const onChange = jest.fn()

        render(<Switch disabled checked={true} onChange={onChange} />)

        await userEvent.click(getSwitch())

        expect(onChange).not.toHaveBeenCalled()
    })

    it('should not be available for tab selection if switch is disabled', async () => {
        render(<Switch disabled checked={true} onChange={() => {}} />)

        await userEvent.tab()

        expect(getSwitch()).not.toHaveFocus()
    })
})
