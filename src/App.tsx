import { FC, useState } from 'react'
import { Switch } from '@mui/material'
import MySwitch from '@/components/Switch/Switch'

const App: FC = () => {
    const [checked1, setChecked1] = useState(true)
    const [checked2, setChecked2] = useState(false)

    return (
        <>
            <div>
                <MySwitch checked={checked2} onChange={(e, checked) => setChecked2(checked)} />
                <MySwitch checked={checked1} onChange={(e, checked) => setChecked1(checked)} />
                <MySwitch checked={checked2} onChange={(e, checked) => setChecked2(checked)} disabled />
                <MySwitch checked={checked1} onChange={(e, checked) => setChecked1(checked)} disabled />
            </div>
            <div>
                <Switch checked={checked2} onChange={(e, checked) => setChecked2(checked)} />
                <Switch checked={checked1} onChange={(e, checked) => setChecked1(checked)} />
                <Switch checked={checked2} onChange={(e, checked) => setChecked2(checked)} disabled />
                <Switch checked={checked1} onChange={(e, checked) => setChecked1(checked)} disabled />
            </div>
        </>
    )
}

export default App
