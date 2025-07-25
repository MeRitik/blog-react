import { useState } from 'react'
import { blogCategories } from '../assets/assets'
import { motion } from 'motion/react';
import BlogCard from './BlogCard';
import { useAppContext } from '../context/AppContext';

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const { blogs, input } = useAppContext();
    const { posts } = blogs;

    function filteredBlogs() {
        if (input === '')
            return posts;

        return posts.filter((blog) => blog.title.toLowerCase().includes(input.toLowerCase()) || blog.category.title.toLowerCase().includes(input.toLowerCase()));
    }

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
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40 px-4 sm:px-8'>
                {filteredBlogs().filter((blog) => selectedCategory === 'All' || blog.category === selectedCategory)
                    .map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
            </div>
        </div>
    )
}

export default Blogs