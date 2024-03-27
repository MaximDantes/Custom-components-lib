import { FC, useState } from 'react'
import MyCheckbox from '@/components/Checkbox/Checkbox'
import { Checkbox } from '@mui/material'

const App: FC = () => {
    const [checked, setChecked] = useState(false)

    return (
        <>
            <MyCheckbox label={'ggregre'} checked={checked} onChange={(checked) => setChecked(checked)} />
            <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        </>
    )
}

export default App
