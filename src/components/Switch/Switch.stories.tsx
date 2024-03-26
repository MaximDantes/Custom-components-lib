import type { Meta, StoryObj } from '@storybook/react'
import Switch from './Switch'

const meta: Meta<typeof Switch> = {
    title: 'Components/Switch',
    component: Switch,
}

export default meta

type Story = StoryObj<typeof Switch>

export const Default: Story = {
    args: {
        checked: true,
    },
}

export const Disabled: Story = {
    args: {
        checked: true,
        disabled: true,
    },
}
