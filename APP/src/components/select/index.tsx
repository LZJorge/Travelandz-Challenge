import styles from  './index.module.css';

type Props = {
    options: {
        placeholder: string
        value: string
    }[],
    name: string
}

const Select: React.FC<Props> = ({ options, name }) => {
    return (
        <select name={name} className={styles.select}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.placeholder}</option>
            ))}
        </select>
    )
}

export default Select