import { FC, useState } from 'react'
import Button from '@/components/Button/Button'
import MyModal from '@/components/Modal/Modal'

const App: FC = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div>
                <Button onClick={() => setOpen(true)}>1</Button>
                <Button onClick={() => setOpen(true)}>2</Button>
                <Button onClick={() => setOpen(true)}>3</Button>
                <Button onClick={() => setOpen(true)}>4</Button>

                <MyModal open={open} onClose={() => setOpen(false)}>
                    <div>
                        <Button onClick={() => setOpen(true)}>1</Button>
                        <Button onClick={() => setOpen(true)}>2</Button>
                        <Button onClick={() => setOpen(true)}>3</Button>
                        <Button onClick={() => setOpen(true)}>4</Button>
                    </div>
                </MyModal>
            </div>
        </>
    )
}

export default App
