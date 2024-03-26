import { FC, useState } from 'react'
import { TextField } from '@mui/material'
import MyTextField from '@/components/TextField/TextField'

const App: FC = () => {
    const [text, setText] = useState('')

    return (
        <>
            <div>
                <MyTextField label={'outline'} value={text} onChange={(e) => setText(e.currentTarget.value)} />
                <MyTextField
                    label={'filled'}
                    value={text}
                    onChange={(e) => setText(e.currentTarget.value)}
                    variant={'filled'}
                />
                <MyTextField
                    label={'standard'}
                    value={text}
                    onChange={(e) => setText(e.currentTarget.value)}
                    variant={'standard'}
                />
            </div>
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" error helperText={'frefe'} />
                <TextField id="outlined-basic" label="Outlined" variant="filled" error helperText={'frefe'} />
                <TextField id="outlined-basic" label="Outlined" variant="standard" error helperText={'frefe'} />
            </div>
        </>
    )
}

export default App
