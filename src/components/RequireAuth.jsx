import React from 'react'
import { useAppContext } from '../context/AppContext'
import Layout from '../pages/admin/Layout';
import Login from '../components/admin/Login';

const RequireAuth = () => {
    const { token } = useAppContext();

    return (
        token ? <Layout /> : <Login />
    )
}

export default RequireAuth