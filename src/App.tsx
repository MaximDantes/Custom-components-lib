import { FC, useState } from 'react'
import Button from '@/components/Button/Button'
import Modal from '@/components/Modal/Modal'

const App: FC = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setOpen(true)}>{'open'}</Button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div>
                    <Button>{'button 1'}</Button>
                    <Button>{'button 2'}</Button>
                </div>
                <Button>{'button 3'}</Button>
            </Modal>
        </>
    )
}

export default App
