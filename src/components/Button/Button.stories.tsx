import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const Contained: Story = {
    args: {
        variant: 'contained',
        children: 'contained',
    },
}

export const Text: Story = {
    args: {
        variant: 'text',
        children: 't',
    },
}

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: 'outlined',
    },
}
