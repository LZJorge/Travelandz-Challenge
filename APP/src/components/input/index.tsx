import styles from './index.module.css'

type Props = {
    type: string
    name?: string
    placeholder?: string
}

const Input = ({ type, name, placeholder }: Props) => {
    return (
        <input
            className={styles.input}
            type={type}
            name={name}
            placeholder={placeholder}
        />
    )
}

export default Input