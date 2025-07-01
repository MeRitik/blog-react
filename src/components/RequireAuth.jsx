import React from 'react'
import { useAppContext } from '../context/AppContext'
import Layout from '../pages/admin/Layout';

const RequireAuth = () => {
    const { token } = useAppContext();

    return (
        token ? <Layout /> : <Login />
    )
}

export default RequireAuth