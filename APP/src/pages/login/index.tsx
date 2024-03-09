import styles from './index.module.css';
import Box from '../../components/box';
import Input from '../../components/input';
import Title from '../../components/title';
import { Link } from 'react-router-dom';
import Button from '../../components/button';

const Login: React.FC = () => {
    return (
        <Box>
            <div className={styles.login}>
                <Title text='Login'/>
                <Input type='text' placeholder='Email'/>
                <Input type='password' placeholder='Password'/>

                <Button text='Sign in' type='button' color='cold' icon='send'/>
                
                <p className={styles.text}>Don't have an account?</p>

                <Link to='/register' className={styles.buttonShadow}>Register</Link>
            </div>
        </Box>

    );
}

export default Login;