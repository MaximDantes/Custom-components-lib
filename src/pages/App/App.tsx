import React, { FC, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Button from '@/components/Button/Button'

const App: FC = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter((prev) => prev + 1)
    }

    return (
        <div data-testid={'id'}>
            <Button onClick={handleClick} variant={'primary'}>
                inc
            </Button>
            <input />
            <div>{counter}</div>
            <Outlet />
        </div>
    )
}

export default App
