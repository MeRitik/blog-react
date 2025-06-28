import React from 'react'
import { assets } from '../../assets/assets'
import Sidebar from '../../components/admin/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();

    function logout() {
        navigate('/')
    }

    return (
        <>
            <div className='flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-foreground/20'>
                <img
                    src={assets.logo}
                    alt="logo"
                    className='w-32 sm:w-40 cursor-pointer'
                    onClick={logout}
                />
                <button onClick={logout} className='text-sm px-8 py-2 bg-primary text-primary-foreground rounded-full cursor-pointer'>Logout</button>
            </div>

            <div className='flex h-[calc(100vh-70px)]'>
                <Sidebar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout