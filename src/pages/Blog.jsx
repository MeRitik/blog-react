import React, { useEffect } from 'react'
import { useParams } from 'react-router'

import { assets, blog_data, comments_data } from '../assets/assets'

import Header from '../components/Header'

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
}

const Blog = () => {
    const blogId = useParams();
    const [data, setData] = React.useState(null);
    const [comments, setComments] = React.useState([]);



    useEffect(() => {
        async function fetchBlogData() {
            const found = blog_data.find(item => item._id === blogId.id);
            if (found) {
                setData(found);
            } else {
                console.error("Blog not found");
            }
        }

        fetchBlogData();

    }, [blogId]);

    useEffect(() => {
        async function fetchComments() {
            // const response = comments_data.filter(item => item.blog === data)
            const response = comments_data;
            setComments(response || []);
            console.log("Comments fetched:", response.length);

        }

        fetchComments();

    }, [data]);

    return (
        data ? (
            <div className='relative'>
                <img src={assets.gradientBackground} alt="background" className='absolute -top-50 -z-1 opacity-50' />

                <Header />

                <div className='text-center mt-20 text-foreground'>
                    <p>Published on {formatDate(data.createdAt)}</p>
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-foreground'>{data.title}</h1>
                    <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subTitle}</h2>
                    <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>Jason Bourne</p>
                </div>

                <div className='max-w-3xl mx-auto px-4 sm:px-0'>
                    <img src={data.image} alt='blog image' className='w-full h-auto rounded-2xl shadow-md mb-5' />
                    <div
                        dangerouslySetInnerHTML={{ __html: data.description }}
                        className='rich-text max-w-3xl mx-auto'
                    ></div>


                    {/* Comments Section */}
                    <div className='mt-14 mb-10 max-w-3xl mx-auto'>
                        <p className='font-semibold mb-4'>{comments.length} Comments</p>
                        <div className='flex flex-col gap-4'>
                            {comments.map((comment, index) => (
                                <div key={index} className='relative bg-accent/10 shadow-accent shadow-2xl p-4 border border-primary/5 max-w-2xl rounded text-foreground'>
                                    <div>
                                        <img src={assets.user_icon} className='w-6' />
                                        <p className='font-medium'>{comment.name}</p>
                                    </div>
                                    <p>{comment.content}</p>
                                    <span className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{formatDate(comment.createdAt)}</span>
                                </div>))}
                        </div>
                    </div>
                    {/* Comment Section */}
                    <div className='max-w-3xl mx-auto'>
                        <p className='font-semibold mb-4'>Add you comment</p>
                        <form onSubmit={() => { }} className='flex flex-col items-start gap-4 max-w-lg'>
                            <input type="text" placeholder='Name' required className='w-full p-2 border border-accent rounded outline-none' />

                            <textarea placeholder='Comment' className='w-full p-2 border border-accent rounded outline-none h-48'></textarea>

                            <button type='submit' className='bg-primary text-primary-foreground rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer'>Submit</button>

                        </form>

                    </div>

                </div>
            </div>
        ) : (<p>Loading...</p>)
    )
}

export default Blog