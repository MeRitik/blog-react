import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const AddBlog = () => {
    const [image, setImage] = useState(false);
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [category, setCategory] = useState('Startup');
    const [published, setPublished] = useState(false);

    async function onSubmitHandler(e) {
        e.preventDefault();

        console.log({
            image,
            title,
            subtitle,
            category,
            published
        });
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex-1 bg-accent/30 text-foreground h-full overflow-scroll">
            <div className="bg-card w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">

                <p>Upload Thumbnail</p>
                <label htmlFor="image">
                    <img src={assets.upload_area} alt="upload area" className="mt-2 h-16 rounded cursor-pointer" />
                    <input type="file" id="image" className="hidden" />
                    <input type="image" id="image" hidden required />
                </label>

            </div>
        </form>
    )
}

export default AddBlog