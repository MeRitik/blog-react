import { useNavigate } from "react-router";

const IMAGE_URL_PREFIX = import.meta.env.VITE_CLOUDINARY_URL_PREFIX;

const BlogCard = ({ blog }) => {
    const { title, content, category, image, id } = blog;
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate(`/blog/${id}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer'>
            <img src={`${IMAGE_URL_PREFIX}/${image}`} className='aspect-video' />
            <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full'>{category?.title}</span>
            <div className="p-5">
                <h5 className="mb-2 font-medium text-foreground">{title}</h5>
                <p className="mb-3 text-xs text-card-foreground" dangerouslySetInnerHTML={{ "__html": content.slice(0, 80) }}></p>
            </div>
        </div>
    )
}

export default BlogCard