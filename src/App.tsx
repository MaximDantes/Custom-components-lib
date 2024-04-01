import { FC, useState } from 'react'
import { TextField } from '@/components/TextField'

const App: FC = () => {
    const [value, setValue] = useState('')

    return (
        <>
            <TextField
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                label={'423432'}
                error={'error'}
            />
            <TextField value={value} onChange={(e) => setValue(e.currentTarget.value)} label={'423432'} />
            <TextField value={value} onChange={(e) => setValue(e.currentTarget.value)} label={'423432'} />
        </>
    )
}

export default App
