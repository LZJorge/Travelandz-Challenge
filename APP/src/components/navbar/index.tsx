import Button from '../button'
import styles from './index.module.css'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <Button text='Search transfers' type='button' color='success' icon='search'/>
                <Button text='My transfers' type='button' color='cold' icon='plus'/>
            </ul>
        </nav>
    )
}

export default Navbar