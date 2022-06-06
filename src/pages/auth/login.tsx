import { useState } from "react";
import { Form } from "../../components/Form";
import { Header1 } from "../../components/Header1";
import authService from "../../services/auth";
import { Button, TextField, Container } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";


const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const handleSubmit = async () => {
        setLoading(true);
        await authService.login(email, password)
        setLoading(false);
    }

    return (
        <Container maxWidth="sm">
            <Form>
                {loading && <LinearProgress className='fluid' />}
                <Header1>Login</Header1>
                <TextField
                    className='field'
                    variant="outlined"
                    label="Email"
                    defaultValue={email}
                    onChange={(value) => setEmail(`${value}`)}
                />
                <TextField
                    className='field'
                    variant="outlined"
                    label="Password"
                    defaultValue={password}
                    onChange={(value) => setPassword(`${value}`)}
                />
                <Button
                    className='field'
                    variant="contained"
                    disabled={loading}
                    onClick={() => handleSubmit()}
                    size="large"
                >
                    Entrar
                </Button>

            </Form>
        </Container>
    );
}
export default Login;