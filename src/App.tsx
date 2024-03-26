import { FC, useState } from 'react'
import { TextField } from '@mui/material'
import MyTextField from '@/components/TextField/TextField'

const App: FC = () => {
    const [text, setText] = useState('')

    return (
        <>
            <div>
                <MyTextField label={'outline'} value={text} onChange={(e) => setText(e.currentTarget.value)} disabled />
                <MyTextField
                    label={'filled'}
                    value={text}
                    onChange={(e) => setText(e.currentTarget.value)}
                    variant={'filled'}
                    disabled
                />
                <MyTextField
                    label={'standard'}
                    value={text}
                    onChange={(e) => setText(e.currentTarget.value)}
                    variant={'standard'}
                    disabled
                />
                <MyTextField
                    label={'standard'}
                    value={text}
                    onChange={(e) => setText(e.currentTarget.value)}
                    variant={'standard'}
                />
            </div>
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" disabled />
                <TextField id="outlined-basic" label="Outlined" variant="filled" disabled />
                <TextField id="outlined-basic" label="Outlined" variant="standard" disabled />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" disabled />
                <TextField id="outlined-basic" label="Outlined" variant="filled" disabled />
                <TextField id="outlined-basic" label="Outlined" variant="standard" disabled />
            </div>
        </>
    )
}

export default App
