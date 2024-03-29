import React from 'react'
import { Button } from './'
import type { Meta, StoryObj } from '@storybook/react'
import Svg1 from './../../assets/grade_FILL0_wght400_GRAD0_opsz24.svg'
import Svg2 from './../../assets/arrow_circle_right_FILL0_wght400_GRAD0_opsz24.svg'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            options: ['contained', 'outlined', 'text'],
            control: { type: 'radio' },
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
    },
    args: {
        disabled: false,
        children: 'button',
        variant: 'contained',
        size: 'medium',
    },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
}

export const WithIcons: Story = {
    args: {
        startIcon: <Svg1 />,
        endIcon: <Svg2 />,
    },
}
