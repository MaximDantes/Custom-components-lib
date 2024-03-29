import React, { FC, useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './'
import { Button } from '@/components/Button'

type PresentationProps = {
    open: boolean
}

const Presentation: FC<PresentationProps> = (props) => {
    const [open, setOpen] = useState(props.open)
    return (
        <>
            <Button onClick={() => setOpen(true)}>show modal</Button>
            <Modal open={open} onClose={() => setOpen(false)} />
        </>
    )
}

const meta: Meta<typeof Presentation> = {
    title: 'Components/Modal',
    component: Presentation,
}

export default meta

type Story = StoryObj<typeof Presentation>

export const Default: Story = {}
