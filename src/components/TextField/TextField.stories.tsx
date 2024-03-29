import React, { FC, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './'

type PresentationProps = Partial<{
    variant: 'outlined' | 'filled' | 'standard'
    label: string
    error: string
    disabled: boolean
    fullWidth: boolean
}>

const Presentation: FC<PresentationProps> = (props) => {
    const [value, setValue] = useState('')

    return <TextField {...props} value={value} onChange={(e) => setValue(e.currentTarget.value)} />
}

const meta: Meta<typeof Presentation> = {
    title: 'Components/TextField',
    component: Presentation,
    argTypes: {
        variant: {
            options: ['outlined', 'filled', 'standard'],
            control: { type: 'radio' },
        },
    },
}

export default meta

type Story = StoryObj<typeof Presentation>

export const Default: Story = {
    args: {
        variant: 'outlined',
        label: 'some hint',
    },
}

export const Error: Story = {
    args: {
        variant: 'outlined',
        label: 'some error',
        error: 'error error',
    },
}

export const Disabled: Story = {
    args: {
        variant: 'outlined',
        label: 'disabled',
        disabled: true,
    },
}

export const FullWidth: Story = {
    args: {
        variant: 'outlined',
        label: 'full width',
        fullWidth: true,
    },
}
