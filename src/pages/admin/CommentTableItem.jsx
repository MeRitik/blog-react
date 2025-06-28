import { assets } from '../../assets/assets';

const CommentTableItem = ({ comment, fetchComments }) => {
    const { blog, createdAt, _id } = comment;
    const blogDate = new Date(createdAt);

    return (
        <tr className='border-b border-accent/20 hover:bg-accent/10'>
            <td className='px-6 py-4'>
                <b className='font-medium text-foreground'>Blog</b> : {blog.title} <br /> <br />
                <b className='font-medium text-foreground'>Name</b> : {comment.name} <br />
                <br />
                <b className='font-medium text-foreground'>Comment</b> : {comment.content}
            </td>

            <td className='px-6 py-4 max-sm:hidden'>
                {blogDate.toLocaleString().split(',')[0]} <br />
            </td>

            <td className='px-6 py-4 max-sm:hidden'>
                <div className='inline-flex items-center gap-4'>
                    {!comment.isApproved ? (
                        <img src={assets.tick_icon} className='w-5 hover:scale-110 transition-all cursor-pointer' />) : (<p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded full px-3 py-1'>Approved</p>)}
                    <img
                        src={assets.bin_icon}
                        className='w-5 hover:scale-110 transition-all cursor-pointer'
                    />
                </div>
            </td>
        </tr>
    )
}

export default CommentTableItem