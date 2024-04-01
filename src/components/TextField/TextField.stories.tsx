import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './'

const meta: Meta<typeof TextField> = {
    title: 'Components/TextField',
    component: TextField,
    argTypes: {
        variant: {
            options: ['outlined', 'filled', 'standard'],
            control: { type: 'radio' },
        },
    },
}

export default meta

type Story = StoryObj<typeof TextField>

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
