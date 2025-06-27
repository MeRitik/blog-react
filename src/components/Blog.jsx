import { useState } from 'react'
import { blogCategories } from '../assets/assets'
import { motion } from 'motion/react';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <div>
            {/* Categories */}
            <div className='flex flex-wrap justify-center items-center gap-4 my-8 relative'>
                {blogCategories.map((item) => (
                    <div key={item} className='relative'>
                        <button onClick={() => setSelectedCategory(item)} className={`cursor-pointer text-foreground ${selectedCategory === item ? 'text-primary px-4 pt-0.5' : 'text-muted-foreground'} `}>
                            {item}
                            {selectedCategory === item &&
                                <motion.div
                                    layoutId='highlight'
                                    transition={{ type: 'spring', stiffness: 500, damping: 30, bounce: 0.25 }}
                                    className='absolute left-0 right-0 top-0 h-7 -z-1 bg-muted rounded-full'>
                                </motion.div>}
                        </button>
                    </div>
                ))}

                {/* Blog Cards */}
            </div>
        </div>
    )
}

export default Blog