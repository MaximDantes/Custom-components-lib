import { FC, useState } from 'react'
import { Checkbox as MyCheckbox } from '@/components/Checkbox'
import { Checkbox, Switch } from '@mui/material'
import { Switch as MySwitch } from '@/components/Switch'

const App: FC = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <MyCheckbox checked={open} onChange={setOpen} label={'frferfer fefre'} />
            <Checkbox checked={open} onChange={(e) => setOpen(e.target.checked)} />

            <MySwitch checked={open} onChange={setOpen} label={'frferfer fefre'} />
            <Switch checked={open} onChange={(e) => setOpen(e.target.checked)} />
        </>
    )
}

export default App
