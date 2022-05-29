import { useState } from 'react';
import { Button } from '../../components/Button';
import { Container } from '../../components/Container';
import { Form } from '../../components/Form';
import { Header1 } from '../../components/Header1';
import { Input } from '../../components/Input';
import authService from '../../services/auth';

const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async () => {
        setLoading(true);
        await authService.login(email, password)
        setLoading(false);
    }

    return (
        <Container>
            <Form>
                <Header1 className='secondary' >Hslash</Header1>
                <Input label="Email" defaultValue={email} onChange={(value) => setEmail(`${value}`)} />
                <Input label="Password" defaultValue={password} onChange={(value) => setPassword(`${value}`)} />
                <Button className="primary" disabled={loading} onClick={() => handleSubmit()} >Entrar</Button>
            </Form>
        </Container>
    );
}
export default Login;