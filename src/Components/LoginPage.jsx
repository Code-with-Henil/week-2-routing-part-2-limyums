import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'yumi' && password === '1234') {
            navigate("/dashboard");
        }else{
            navigate("/login");
        }
    };
    return (
        <div>
            <h1>Login Page</h1>
            <div>
                <div>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
            </div>
            <div>
                <div>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
            </div>
            <button type="button" onClick={handleLogin}>Login</button>

        </div>
    );
}


export default LoginPage;


