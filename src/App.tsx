import { FC } from 'react'
import Button from '@/components/Button/Button'
import Svg1 from '@/assets/grade_FILL0_wght400_GRAD0_opsz24.svg'

const App: FC = () => {
    return (
        <div>
            <Button variant={'contained'} startIcon={<Svg1 />}>
                button
            </Button>
        </div>
    )
}

export default App
