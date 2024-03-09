import styles from './index.module.css'

const Box = ({ children }: any) => {
    return (
        <div className={styles.box}>
            {children}
        </div>
    )
}

export default Box