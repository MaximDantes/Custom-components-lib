import { FC } from 'react'
import MyButton from '@/components/Button/Button'
import { Button } from '@mui/material'

const App: FC = () => {
    return (
        <>
            <div>
                <MyButton>fetch</MyButton>
                <Button variant={'contained'}>fetch</Button>
            </div>
            <div>
                <MyButton variant={'text'}>fetch</MyButton>
                <Button variant={'text'}>fetch</Button>
            </div>
            <div>
                <MyButton variant={'outlined'}>fetch</MyButton>
                <Button variant={'outlined'}>fetch</Button>
            </div>
        </>
    )
}

export default App
