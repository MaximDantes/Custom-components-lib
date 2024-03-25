import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
    args: {
        label: 'checkbox checkbox',
        checked: true,
    },
}

export const Disabled: Story = {
    args: {
        label: 'disabled disabled',
        checked: true,
        disabled: true,
    },
}
