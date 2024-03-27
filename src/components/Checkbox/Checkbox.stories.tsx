import React, { FC, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Checkbox from './Checkbox'

type PresentationProps = Partial<{
    label: string
    disabled: boolean
}>

const Presentation: FC<PresentationProps> = (props) => {
    const [checked, setChecked] = useState(false)

    return <Checkbox {...props} checked={checked} onChange={(checked) => setChecked(checked)} />
}

const meta: Meta<typeof Presentation> = {
    title: 'Components/Checkbox',
    component: Presentation,
    args: {
        disabled: false,
        label: 'checkbox checkbox',
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
