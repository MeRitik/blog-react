import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'

import Quill from 'quill';
import toast from 'react-hot-toast';

const AddBlog = () => {
    const [image, setImage] = useState(false);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [category, setCategory] = useState('');
    const [isPublished, setPublished] = useState(false);

    const editorRef = useRef(null);
    const quillRef = useRef(null);

    const { axios } = useAppContext();


    function generateContent() {
        return "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    }

    async function onSubmitHandler(e) {
        e.preventDefault();

        if (!title || !subtitle || !category) {
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('subtitle', subtitle);
        formData.append('content', quillRef.current.getText());
        formData.append('image', image);
        formData.append('isPublished', isPublished);


        // /user/{userId}/category/{categoryId}/posts
        try {
            const res = await axios.post(`/api/v2/user/${localStorage.getItem("userId")}/category/9/posts`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(res.data);
            if (res.data.id) {
                toast.success('Blog added successfully!');
                setImage(false);
                setTitle('');
                setSubtitle('');
                setCategory('');
                quillRef.current.setText('');
            }
        } catch (error) {
            console.error('Error adding blog:', error);
            toast.error('An error occurred while adding the blog.');
        }
    }

    useEffect(() => {
        if (!quillRef.current && editorRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow'
            });
        }
    }, []);

    return (
        <form onSubmit={onSubmitHandler} className="flex-1 bg-accent/30 text-foreground h-full overflow-scroll">
            <div className="bg-card w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">

                <p>Upload Thumbnail</p>
                <label htmlFor="image">
                    <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="upload area" className="mt-2 h-16 rounded cursor-pointer" />
                    <input onChange={e => setImage(e.target.files[0])} type="file" id="image" hidden required />
                </label>

                <p className='mt-4'>Blog Title</p>
                <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-accent outline-none rounded' value={title} onChange={e => setTitle(e.target.value)} />

                <p className='mt-4'>Subtitle</p>
                <input type="text" placeholder='Type here' required className='w-full max-w-lg mt-2 p-2 border border-accent outline-none rounded' value={subtitle} onChange={e => setSubtitle(e.target.value)} />


                <p className='mt-4'>Blog Description</p>
                <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>

                    <div ref={editorRef}></div>


                    <button onClick={generateContent} className='absolute bottom-1 right-2 ml-2 text-xs text-primary-foreground bg-primary/70 px-4 py-1.5 rounded cursor-pointer hover:bg-primary/90 transition-all'>Generate with AI</button>
                </div>

                <p className='mt-4'>Blog Category</p>
                <select value={category} onChange={e => setCategory(e.target.value)} className='w-48 mt-2 p-2 border border-accent outline-none rounded'>
                    <option value="">Select Category</option>
                    {blogCategories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>

                <div className='flex items-center gap-2 mt-4'>
                    <p>Publish Now</p>
                    <input type="checkbox" className='cursor-pointer scale-125' checked={isPublished} onChange={e => setPublished(e.target.checked)} />
                </div>

                <button type='submit' className='mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-sm cursor-pointer hover:bg-primary/90 transition-all'>Add Blog</button>
            </div>
        </form>
    )
}

export default AddBlog