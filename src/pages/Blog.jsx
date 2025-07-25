import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { assets } from '../assets/assets'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const VITE_CLOUDINARY_URL_PREFIX = import.meta.env.VITE_CLOUDINARY_URL_PREFIX;

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
}

const Blog = () => {
    const blogId = useParams();
    const [data, setData] = useState(null);
    const [comments, setComments] = useState([]);

    const [name, setName] = useState('');
    const [comment, setComment] = useState('');

    const { axios } = useAppContext();

    console.log(comments);


    useEffect(() => {
        async function fetchBlogData() {
            try {
                const response = await axios.get(`api/posts/${blogId.id}`)
                console.log(response);

                if (response.status === 200) {
                    setData(response.data);
                    setComments(response.data.comments || []);
                    setName(response.data.author.name)
                }

            } catch (e) {
                toast.error('Error fetching blog data', e.message);
            }
        }

        fetchBlogData();

    }, [blogId, axios]);

    async function handleCommentSubmit(e) {
        e.preventDefault();

        if (comment === '' || name === '') {
            toast.error('Please fill in both name and comment');
            console.error('Name or comment is empty');
            return;
        }

        const commentResponseData = {
            comment,
            isApproved: false,
            author: name,
            createdAt: formatDate(new Date().toISOString())
        }

        try {
            const res = await axios.post(`api/posts/${blogId.id}/comments`, commentResponseData);
            if (res.status === 201) {
                setComments([...comments, commentResponseData]);
                setComment('');
                toast.success('Comment added successfully');
            }
        } catch {
            toast.error('Failed to add comment');
        }
    }

    return (
        data ? (
            <div className='relative'>
                <img src={assets.gradientBackground} alt="background" className='absolute -top-50 -z-1 opacity-50' />

                <Header />

                <div className='text-center mt-20 text-foreground'>
                    <p>Published on {data.date}</p>
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-foreground'>{data.title}</h1>
                    <h2 className='my-5 max-w-lg truncate mx-auto'>{data.subtitle}</h2>
                    <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>{name}</p>
                </div>

                <div className='max-w-3xl mx-auto px-4 sm:px-0'>
                    <img src={`${VITE_CLOUDINARY_URL_PREFIX}${data.image}`} alt='blog image' className='w-full h-auto rounded-2xl shadow-md mb-5' />
                    <div
                        dangerouslySetInnerHTML={{ __html: data.content }}
                        className='rich-text max-w-3xl mx-auto'
                    ></div>


                    {/* Comments Section */}
                    <div className='mt-14 mb-10 max-w-3xl mx-auto'>
                        <p className='font-semibold mb-4'>{comments.length} Comments</p>
                        <div className='flex flex-col gap-4'>
                            {comments.map((comment, index) => (
                                <div key={index} className='relative bg-accent/10 shadow-accent shadow-2xl p-4 border border-primary/5 max-w-2xl rounded text-foreground'>
                                    <div className='flex items-center gap-2 mb-2 text-primary'>
                                        <img src={assets.user_icon} className='w-6' />
                                        <p className='font-medium'>{comment.author}</p>
                                    </div>
                                    <p>{comment.comment}</p>
                                    <span className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{formatDate(comment.createdAt)}</span>
                                </div>))}
                        </div>
                    </div>

                    {/* Form Section */}
                    <div className='max-w-3xl mx-auto'>
                        <p className='font-semibold mb-4'>Add you comment</p>
                        <form
                            onSubmit={(event) => handleCommentSubmit(event)}
                            className='flex flex-col items-start gap-4 max-w-lg'>
                            <input
                                type="text"
                                placeholder='Name'
                                className='w-full p-2 border border-accent rounded outline-none'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <textarea
                                placeholder='Comment'
                                className='w-full p-2 border border-accent rounded outline-none h-48'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            ></textarea>

                            <button type='submit' className='bg-primary text-primary-foreground rounded p-2 px-8 hover:scale-102 transition-all cursor-pointer'>Submit</button>
                        </form>
                    </div>

                    <div className='mb-8'>
                        <p>Share this article on social media</p>
                        <div className="flex">
                            <img src={assets.facebook_icon} alt="facebook_icon" />
                            <img src={assets.twitter_icon} alt="twitter_icon" />
                            <img src={assets.googleplus_icon} alt="googleplus_icon" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        ) : (<Loader />)
    )
}

export default Blog