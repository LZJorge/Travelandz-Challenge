import styles from './index.module.css';

type ButtonStyle = 'success' | 'warning' | 'danger' | 'cold' | 'shadow'

type Props = {
    text: string
    color: ButtonStyle
    type: 'button' | 'submit'
    icon?: string
    onClick?: any
}

const Button: React.FC<Props> = ({ text, color, type, icon, onClick }) => {
    return (
        <button
            className={`${styles.button} ${styles[color]}`}
            type={type}
            onClick={onClick}
        >
            {text}
            {icon && <i className={`bx bx-${icon}`}></i>}
        </button>
    )
}

export default Button