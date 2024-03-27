import { FC, useState } from 'react'
import MySwitch from '@/components/Switch/Switch'
import { Switch } from '@mui/material'

const App: FC = () => {
    const [checked, setChecked] = useState(false)

    return (
        <>
            <MySwitch label={'ggregre'} checked={checked} onChange={(checked) => setChecked(checked)} />
            <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
        </>
    )
}

export default App
