import { FC, useState } from 'react'
import { Checkbox as MyCheckbox } from '@/components/Checkbox'
import { Checkbox } from '@mui/material'

const App: FC = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <MyCheckbox checked={open} onChange={setOpen} label={'frferfer fefre'} />
            <Checkbox checked={open} onChange={(e) => setOpen(e.target.checked)} />
        </>
    )
}

export default App
