import React from 'react'

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // Handle login logic here
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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