import { assets } from '../assets/assets.js';
export default function Hero() {
    return (
        <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
            <div className='text-center mt-20 mb-8'>
                <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary'>
                    <p>New: AI Feature Integrated</p>
                    <img src={assets.star_icon} className='w-2.5' />
                </div>

                <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-foreground'>Your own <span className='text-primary'>blogging</span> <br /> platform.</h1>

                <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-foreground'>This is a platform where you can share your thoughts and ideas with the world. Just create an account and start writing!</p>

                <form className='flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-primary/20 bg-primary/10 rounded-full px-1.5 py-1.5 gap-2'>
                    <input type="text" placeholder='Search for blogs' className='w-full pl-4 outline-none' required />
                    <button type='submit' className='bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold cursor-pointer'>Search</button>
                </form>

            </div>

            <img src={assets.gradientBackground} className='absolute -top-50 -z-1 opacity-50' alt='background' />
        </div >
    )
}
