import { FC, useState } from 'react'
import MyTextField from '@/components/TextField/TextField'
import { TextField } from '@mui/material'

const App: FC = () => {
    const [value, setValue] = useState('')

    return (
        <>
            <TextField
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                label={'wdwdw'}
                error
                helperText={
                    'frrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfffffffff frrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrr rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfffffffff frefer f qwerrrrrrrrrrrr fffffffffff'
                }
            />
            <MyTextField
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                label={'dede'}
                error={
                    'frrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfffffffff frrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrr rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfffffffff frefer f qwerrrrrrrrrrrr fffffffffff'
                }
            />
            <TextField
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                label={'wdwdw'}
                error
                helperText={
                    'frrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfffffffff frrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrr rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfffffffff frefer f qwerrrrrrrrrrrr fffffffffff'
                }
                variant={'filled'}
            />
            <MyTextField
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                label={'dede'}
                error={
                    'frrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfffffffff frrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrr rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfffffffff frefer f qwerrrrrrrrrrrr fffffffffff'
                }
                variant={'filled'}
            />
            <TextField
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                label={'wdwdw'}
                error
                helperText={
                    'frrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfffffffff frrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrr rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfffffffff frefer f qwerrrrrrrrrrrr fffffffffff'
                }
                variant={'standard'}
            />
            <MyTextField
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
                label={'dede'}
                error={
                    'frrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfffffffff frrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrr rrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrr rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrffffffffffrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrfffffffff frefer f qwerrrrrrrrrrrr fffffffffff'
                }
                variant={'standard'}
            />
        </>
    )
}

export default App
