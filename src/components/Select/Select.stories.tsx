import React, { FC, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Select, Option } from './'

type PresentationProps = {
    options: Option[]
    label?: string
    fullWidth?: boolean
    disabled?: boolean
    variant?: 'outlined' | 'filled' | 'standard'
}

const Presentation: FC<PresentationProps> = (props) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)

    return (
        <Select
            {...props}
            open={open}
            value={value}
            onToggle={(open) => setOpen(open)}
            onChange={(value) => setValue(value)}
        />
    )
}

const meta: Meta<typeof Presentation> = {
    title: 'Components/Select',
    component: Presentation,
    args: {
        options: [
            { value: 1, title: 'ferfefe' },
            { value: 2, title: 'qqqqqqqqqqq' },
            { value: 3, title: 'bbbbbbbbbbbb' },
            { value: 4, title: 'wwwwwwww wwwwwwwwwwwww wwwwwwwwwwwww wwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwww' },
        ],
        label: 'select select',
        fullWidth: false,
    },
    argTypes: {
        variant: {
            options: ['outlined', 'filled', 'standard'],
            control: { type: 'radio' },
        },
    },
}

export default meta

type Story = StoryObj<typeof Presentation>

export const Default: Story = {}

export const FullWidth: Story = {
    args: {
        fullWidth: true,
    },
}
export const Disabled: Story = {
    args: {
        disabled: true,
    },
}
