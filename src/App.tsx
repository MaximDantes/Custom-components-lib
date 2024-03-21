import { FC } from 'react'
import MyButton from '@/components/Button/Button'
import { Button } from '@mui/material'
import Svg1 from '@/assets/arrow_circle_right_FILL0_wght400_GRAD0_opsz24.svg'
import Svg2 from '@/assets/grade_FILL0_wght400_GRAD0_opsz24.svg'

const App: FC = () => {
    return (
        <div>
            <div>
                <MyButton startIcon={<Svg1 />} variant={'text'} size={'small'}>
                    button
                </MyButton>
                <MyButton endIcon={<Svg2 />} variant={'text'} size={'medium'}>
                    button
                </MyButton>
                <MyButton startIcon={<Svg1 />} endIcon={<Svg2 />} variant={'text'} size={'large'}>
                    button
                </MyButton>
                <MyButton startIcon={<Svg1 />} variant={'outlined'} size={'small'}>
                    button
                </MyButton>
                <MyButton endIcon={<Svg2 />} variant={'outlined'} size={'medium'}>
                    button
                </MyButton>
                <MyButton startIcon={<Svg1 />} endIcon={<Svg2 />} variant={'outlined'} size={'large'}>
                    button
                </MyButton>
                <MyButton startIcon={<Svg1 />} variant={'contained'} size={'small'} disabled>
                    button
                </MyButton>
                <MyButton endIcon={<Svg2 />} variant={'text'} size={'medium'} disabled>
                    button
                </MyButton>
                <MyButton startIcon={<Svg1 />} endIcon={<Svg2 />} variant={'outlined'} size={'large'} disabled>
                    button
                </MyButton>
            </div>
            <div>
                <Button startIcon={<Svg1 />} variant={'text'} size={'small'}>
                    button
                </Button>
                <Button endIcon={<Svg2 />} variant={'text'} size={'medium'}>
                    button
                </Button>
                <Button startIcon={<Svg1 />} endIcon={<Svg2 />} variant={'text'} size={'large'}>
                    button
                </Button>
                <Button startIcon={<Svg1 />} variant={'outlined'} size={'small'}>
                    button
                </Button>
                <Button endIcon={<Svg2 />} variant={'outlined'} size={'medium'}>
                    button
                </Button>
                <Button startIcon={<Svg1 />} endIcon={<Svg2 />} variant={'outlined'} size={'large'}>
                    button
                </Button>
                <Button startIcon={<Svg1 />} variant={'contained'} size={'small'} disabled>
                    button
                </Button>
                <Button endIcon={<Svg2 />} variant={'text'} size={'medium'} disabled>
                    button
                </Button>
                <Button startIcon={<Svg1 />} endIcon={<Svg2 />} variant={'outlined'} size={'large'} disabled>
                    button
                </Button>
            </div>

            <div>
                <MyButton variant={'contained'} size={'small'}>
                    button
                </MyButton>
                <MyButton variant={'contained'} size={'medium'}>
                    button
                </MyButton>
                <MyButton variant={'contained'} size={'large'}>
                    button
                </MyButton>
                <MyButton variant={'text'} size={'small'}>
                    button
                </MyButton>
                <MyButton variant={'text'} size={'medium'}>
                    button
                </MyButton>
                <MyButton variant={'text'} size={'large'}>
                    button
                </MyButton>
                <MyButton variant={'outlined'} size={'small'}>
                    button
                </MyButton>
                <MyButton variant={'outlined'} size={'medium'}>
                    button
                </MyButton>
                <MyButton variant={'outlined'} size={'large'}>
                    button
                </MyButton>
                <MyButton variant={'contained'} size={'small'} disabled>
                    button
                </MyButton>
                <MyButton variant={'text'} size={'medium'} disabled>
                    button
                </MyButton>
                <MyButton variant={'outlined'} size={'large'} disabled>
                    button
                </MyButton>
            </div>
            <div>
                <Button variant={'contained'} size={'small'}>
                    button
                </Button>
                <Button variant={'contained'} size={'medium'}>
                    button
                </Button>
                <Button variant={'contained'} size={'large'}>
                    button
                </Button>
                <Button variant={'text'} size={'small'}>
                    button
                </Button>
                <Button variant={'text'} size={'medium'}>
                    button
                </Button>
                <Button variant={'text'} size={'large'}>
                    button
                </Button>
                <Button variant={'outlined'} size={'small'}>
                    button
                </Button>
                <Button variant={'outlined'} size={'medium'}>
                    button
                </Button>
                <Button variant={'outlined'} size={'large'}>
                    button
                </Button>
                <Button variant={'contained'} size={'small'} disabled>
                    button
                </Button>
                <Button variant={'text'} size={'medium'} disabled>
                    button
                </Button>
                <Button variant={'outlined'} size={'large'} disabled>
                    button
                </Button>
            </div>
        </div>
    )
}

export default App
