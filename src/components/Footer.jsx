import { Link } from 'react-router'

import { assets, footer_data } from '../assets/assets'

const Footer = () => {
    return (
        <footer className='px-6 md:px-16 lg:px-24 xl:px-32 py-8 bg-muted'>
            <div className='flex flex-col md:flex-row justify-between items-start gap-10 py-10 border-b border-muted-foreground text-accent-foreground'>

                <div>
                    <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
                    <p className='max-w-[410px] mt-6'>
                        NextBlog is a modern blogging platform that allows you to share your thoughts and ideas with the world. Join us today and start writing!
                    </p>
                </div>

                <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
                    {footer_data.map((section, index) => (
                        <div key={index}>
                            <h3>{section.title}</h3>
                            <ul className='mt-4 space-y-2'>
                                {section.links.map((item, idx) => (
                                    <li key={idx} className='text-sm md:text-base text-muted-foreground hover:text-primary cursor-pointer'>
                                        <Link to="#">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <p className='py-4 text-center text-sm md:text-base text-foreground'>Copyright © 2025 NextBlog - All Rights Reserved</p>

        </footer>
    )
}

export default Footer