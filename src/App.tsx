import { FC, useState } from 'react'
import MySelect from '@/components/Select/Select'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const options = [
    { value: null, title: 'None' },
    { value: 1, title: 'ferfefe' },
    { value: 2, title: 'qqqqqqqqqqq' },
    { value: 3, title: 'bbbbbbbbbbbb' },
    { value: 4, title: 'wwwwwwww wwwwwwwwwwwww wwwwwwwwwwwww wwwwwwwwwwwww wwwwwwwwwwwwwwwwwwwwwwwwww' },
]

const App: FC = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(null)

    return (
        <>
            <MySelect
                open={open}
                value={value}
                options={options}
                onToggle={(open) => setOpen(open)}
                onChange={(value) => setValue(value)}
                label={'ffffffrf frfrfr'}
                fullWidth
                disabled
            />
            <MySelect
                open={open}
                value={value}
                options={options}
                onToggle={(open) => setOpen(open)}
                onChange={(value) => setValue(value)}
                label={'ffffffrf frfrfr'}
                fullWidth
            />

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    disabled
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Age"
                    onChange={(e) => setValue(e.target.value as string)}
                >
                    {options.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}

export default App
