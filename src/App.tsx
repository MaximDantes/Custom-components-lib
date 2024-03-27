import { FC } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import MySelect from '@/components/Select/Select'

const App: FC = () => {
    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>
                        Tenfewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                    </MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <MySelect
                label={'select'}
                options={[
                    { value: 1, title: 'one' },
                    { value: 2, title: 'two' },
                    { value: 3, title: 'three' },
                ]}
            />
            <MySelect
                label={'select'}
                options={[
                    { value: 1, title: 'one' },
                    { value: 2, title: 'two' },
                    { value: 3, title: 'three' },
                ]}
            />
        </>
    )
}

export default App
