import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { beforeEach, describe, expect, it, jest } from '@jest/globals'
import { FC, useState } from 'react'
import { Select, Option } from './'

const options: Option[] = [
    { value: null, title: 'none' },
    { value: 1, title: 'option 1' },
    { value: 2, title: 'option 2' },
    { value: 3, title: 'option 3' },
    { value: 4, title: 'option 4' },
]

type WrapperProps = {
    label: string
    options: Option[]
}

const SelectWrapper: FC<WrapperProps> = (props) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)

    return (
        <Select
            open={open}
            onToggle={setOpen}
            value={value}
            onChange={setValue}
            options={props.options}
            label={props.label}
        />
    )
}

const getSelect = () => screen.getByRole('combobox')

describe('Select', () => {
    it('should render without errors', () => {
        render(<Select open={false} onToggle={() => {}} value={null} onChange={() => {}} options={options} />)

        expect(getSelect()).toBeInTheDocument()
    })

    it('should have provided label', () => {
        render(
            <Select
                label={'test label'}
                open={false}
                onToggle={() => {}}
                value={null}
                onChange={() => {}}
                options={options}
            />
        )

        expect(screen.getByText('test label')).toBeInTheDocument()
    })

    it('should have provided options', async () => {
        render(<Select open={true} onToggle={() => {}} value={null} onChange={() => {}} options={options} />)

        expect(screen.getByText('none')).toBeInTheDocument()
        expect(screen.getByText('option 1')).toBeInTheDocument()
        expect(screen.getByText('option 2')).toBeInTheDocument()
        expect(screen.getByText('option 3')).toBeInTheDocument()
        expect(screen.getByText('option 4')).toBeInTheDocument()
    })

    it('should have provided value', () => {
        render(
            <Select open={true} onToggle={() => {}} value={options[2].value} onChange={() => {}} options={options} />
        )

        expect(getSelect()).toHaveValue(options[2].title)
    })

    it('should be open', () => {
        render(<Select open={true} onToggle={() => {}} value={null} onChange={() => {}} options={options} />)

        expect(screen.getByText('option 4')).toBeInTheDocument()
    })

    it('should call onToggle after click on select', async () => {
        const onToggle = jest.fn()

        render(<Select open={false} onToggle={onToggle} value={null} onChange={() => {}} options={options} />)

        await userEvent.click(getSelect())

        expect(onToggle).toBeCalledTimes(1)
    })

    it('should call onChange after click on option', async () => {
        const onChange = jest.fn()

        render(<Select open={true} onToggle={() => {}} value={null} onChange={onChange} options={options} />)

        await userEvent.click(screen.getByText('option 2'))

        expect(onChange).toHaveBeenCalledTimes(1)
    })

    it('should be disabled', () => {
        render(<Select disabled open={false} onToggle={() => {}} value={null} onChange={() => {}} options={options} />)

        expect(getSelect()).toHaveAttribute('disabled')
    })

    it('should not call onToggle if select is disabled', async () => {
        const onToggle = jest.fn()

        render(<Select disabled open={false} onToggle={onToggle} value={null} onChange={() => {}} options={options} />)

        await userEvent.click(getSelect())

        expect(onToggle).not.toHaveBeenCalled()
    })
})

describe('Select with wrapper', () => {
    beforeEach(() => {
        render(<SelectWrapper label={'some select'} options={options} />)
    })

    it('should render without errors', () => {
        expect(getSelect()).toBeInTheDocument()
    })

    it('should open options', async () => {
        await userEvent.click(getSelect())

        expect(screen.getByText('option 3')).toBeInTheDocument()
    })

    it('should close options after second click', async () => {
        await userEvent.click(getSelect())
        await userEvent.click(getSelect())

        expect(screen.queryByText('option 3')).not.toBeInTheDocument()
    })

    it('should close options after click in another place', async () => {
        await userEvent.click(getSelect())
        await userEvent.click(document.body)

        expect(screen.queryByText('option 4')).not.toBeInTheDocument()
    })

    it('should select value', async () => {
        await userEvent.click(getSelect())
        await userEvent.click(screen.getByText('option 2'))

        expect(getSelect()).toHaveValue('option 2')
        expect(screen.queryByText('option 1')).not.toBeInTheDocument()
    })

    it('should open options by Enter', async () => {
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')

        expect(screen.getByText('option 1')).toBeInTheDocument()
    })

    it('should select last value on ArrowUp press', async () => {
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        await userEvent.keyboard('[ArrowUp]')
        await userEvent.keyboard('[Enter]')

        expect(getSelect()).toHaveValue('option 4')
    })

    it('should select first value on ArrowDown press', async () => {
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        await userEvent.keyboard('[ArrowDown]')
        await userEvent.keyboard('[ArrowDown]')
        await userEvent.keyboard('[Enter]')

        expect(getSelect()).toHaveValue('option 1')
    })

    it('should clear value when none selected', async () => {
        await userEvent.tab()
        await userEvent.keyboard('[Enter]')
        await userEvent.keyboard('[ArrowUp]')
        await userEvent.keyboard('[Enter]')
        await userEvent.keyboard('[Enter]')
        await userEvent.keyboard('[ArrowDown]')
        await userEvent.keyboard('[Enter]')

        expect(getSelect()).toHaveValue('')
    })

    it('should close options on Escape press', async () => {
        await userEvent.click(getSelect())

        expect(screen.getByText('option 3')).toBeInTheDocument()

        await userEvent.keyboard('[Escape]')

        expect(screen.queryByText('option 3')).not.toBeInTheDocument()
    })
})
