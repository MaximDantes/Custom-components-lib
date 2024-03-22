import { FC } from 'react'
import styles from './Checkbox.module.scss'

type Props = Partial<{
    checked: boolean
    disabled: boolean
    label: string
    onChange: () => void
}>

const Checkbox: FC<Props> = (props) => {
    return (
        <label className={styles.container}>
            <input type={'checkbox'} className={styles.checkbox} />
            {props.label}
        </label>
    )
}

export default Checkbox
