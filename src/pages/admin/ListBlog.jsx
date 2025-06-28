import React, { useEffect } from 'react'
import { blog_data, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem';

const ListBlog = () => {
    const [blogs, setBlogs] = React.useState([])

    async function fetchBlogs() {
        setBlogs(blog_data);
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className='flex-1 pt-5 px-6 sm:pt-12 sm:pl-16 bg-accent'>
            <h1 className='text-2xl font-bold mb-4 text-foreground'>All Blogs</h1>

            <div className='relative h-4/5 max-w-4xl overflow-x-auto shadow rounded-lg no-scrollbar bg-accent'>
                <table className='w-full text-sm text-foreground bg-card'>
                    <thead className='text-xs uppercase bg-card text-left'>
                        <tr>
                            <th scope="col" className='px-2 py-4 xl:px-6'>#</th>
                            <th scope="col" className='px-2 py-4'>Blog Title</th>
                            <th scope="col" className='px-2 py-4 max-sm:hidden'>Date</th>
                            <th scope="col" className='px-2 py-4 max-sm:hidden'>Status</th>
                            <th scope="col" className='px-2 py-4'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {blogs.map((blog, index) => (
                            <BlogTableItem
                                key={blog._id}
                                blog={blog}
                                fetchBlogs={fetchBlogs}
                                index={index + 1}
                            />
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default ListBlog