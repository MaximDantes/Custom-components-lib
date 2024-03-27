import React, { FC, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Switch from './Switch'

type PresentationProps = Partial<{
    disabled: boolean
    label: string
}>

const Presentation: FC<PresentationProps> = (props) => {
    const [checked, setChecked] = useState(false)

    return <Switch {...props} checked={checked} onChange={(checked) => setChecked(checked)} />
}

const meta: Meta<typeof Presentation> = {
    title: 'Components/Switch',
    component: Presentation,
    args: {
        disabled: false,
        label: 'switch switch',
    },
}

export default meta

type Story = StoryObj<typeof Presentation>

export const Default: Story = {}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
}
