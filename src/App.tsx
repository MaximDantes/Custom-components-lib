import { FC, useState } from 'react'
import { TextField } from '@/components/TextField'
import { MenuItem, Select } from '@mui/material'

const App: FC = () => {
    const [value, setValue] = useState('')

    return (
        <>
            <Select>
                <MenuItem>gtgt</MenuItem>
                <MenuItem>gtgt</MenuItem>
                <MenuItem>gtgt</MenuItem>
            </Select>
            <TextField
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                label={'423432'}
                error={'error'}
            />
            <TextField label={'423432'} disabled />
            <TextField value={value} onChange={(e) => setValue(e.currentTarget.value)} label={'423432'} disabled />
        </>
    )
}

export default App
