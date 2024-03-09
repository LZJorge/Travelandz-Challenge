import { Link } from 'react-router-dom';
import styles from './index.module.css';
import Input from '../../components/input';
import Box from '../../components/box';
import Title from '../../components/title';
import Button from '../../components/button';

const Register: React.FC = () => {
    return (
        <Box>
            <div className={styles.register}>
                <Title text='Register Account'/>

                <Input type='text' placeholder='First Name'/>
                <Input type='text' placeholder='Last Name'/>
                <Input type='text' placeholder='Email'/>
                <Input type='password' placeholder='Password'/>
                
                <Button text='Register' type='button' color='cold' icon='save'/>

                <p className={styles.text}>Already have an account?</p>
                
                <Link to='/' className={styles.buttonShadow}>Log in</Link>
            </div>
        </Box>

    );
}

export default Register