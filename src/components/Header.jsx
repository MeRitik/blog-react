import { useNavigate } from 'react-router'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

export default function Header() {
    const { token } = useAppContext();
    const navigate = useNavigate();

    return (
        <header className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
            <img onClick={() => navigate('/')} src={assets.logo} alt='logo' className='2-32 sm:w-44 cursor-pointer' />
            <button onClick={() => navigate('/admin')} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-primary-foreground px-10 py-2.5'>
                {token ? 'Dashboard' : 'Login'}
                <img src={assets.arrow} className='w-3' alt='arrow sign' />
            </button>


        </header>
    )
}
