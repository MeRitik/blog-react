import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { axios, setToken, setUserId } = useAppContext();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const { data } = await axios.post('api/v1/auth/login', { username, password });
            if (data.success) {
                setToken(data.token);
                localStorage.setItem("token", data.token);
                setUserId(data.userId);
                localStorage.setItem("userId", data.userId);
                toast.success('Login successful');
                console.log(data);

                navigate('/admin');
            } else {
                toast.error(data.message);
            }
        } catch (e) {
            toast.error(e.message)
        }
    }

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='w-full max-w-sm p-6 max-md:m-6 border border-accent shadow-2xl shadow-accent rounded-lg'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='w-full py-6 text-center'>
                        <h1 className='text-3xl font-bold'><span className='text-primary'>User</span> Login</h1>
                        <p className='font-light text-foreground'>Please enter your credentials</p>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full'>
                        <input
                            type="email"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='w-full p-2 border border-accent rounded-md mb-4 text-foreground'
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full p-2 border border-accent rounded-md mb-4 text-foreground'
                        />

                        <button type="submit" className='w-full p-2 bg-primary text-primary-foreground rounded-md'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login