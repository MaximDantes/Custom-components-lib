import { FC, useState } from 'react'
import MyCheckbox from '@/components/Checkbox/Checkbox'
import { Checkbox, FormControlLabel } from '@mui/material'

const App: FC = () => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <>
            <div>
                <MyCheckbox label={'gtgtgt'} checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />
                <MyCheckbox
                    label={'gtgtgt'}
                    checked={!isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                    disabled
                />
                <MyCheckbox
                    label={'gtgtgt'}
                    checked={isChecked}
                    onChange={() => setIsChecked((prev) => !prev)}
                    disabled
                />
            </div>
            <div>
                <FormControlLabel control={<Checkbox />} label={'muifrfr'} />
                <FormControlLabel control={<Checkbox />} label={'muifrfr'} />
                <FormControlLabel control={<Checkbox />} label={'muifrfr'} checked disabled />
                <FormControlLabel control={<Checkbox />} label={'muifrfr'} disabled />
            </div>
        </>
    )
}

export default App
