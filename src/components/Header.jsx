import { MdArrowForward, MdOutlineNewspaper } from 'react-icons/md'
import { Link } from 'react-router'

export default function Header() {
    return (
        <header className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32'>
            <Link className='flex items-center'>
                <MdOutlineNewspaper className='text-4xl sm:text-5xl cursor-pointer' color='#afaafa' />
                <span className='text-xl font-semibold uppercase text-foreground text-shadow-xs'>NextBlog</span>
            </Link>

            <Link to='/admin' className='flex items-center gap-2 rounded-full text-sm bg-primary text-primary-foreground px-10 py-2.5 cursor-pointer'>Login
                <MdArrowForward />
            </Link>
        </header >

    )
}
