import { assets } from "../../assets/assets";

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
    const { title, date } = blog;
    const blogDate = Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric',
        day: '2-digit',
    }).format(new Date(date));

    return (
        <tr className="border-y-2 border-accent/20 hover:bg-accent/25 transition-all duration-300 ease-in-out ">
            <th className="px-2 py-4">{index}</th>
            <td className="px-2 py-4">{title}</td>
            <td className="px-2 py-4 max-sm:hidden">{blogDate}</td>
            <td className="px-2 py-4 max-sm:hidden">
                <p className={`${blog.isPublished ? "text-green-600" : "text-orange-700"}`}>{blog.isPublished ? 'Published' : 'Unpublished'}</p>
            </td>
            <td className="px-2 py-4 flex text-xs gap-3">
                <button className="border border-muted rounded p-2 bg-card cursor-pointer font-medium ">{blog.isPublished ? 'Unpublish' : 'Publish'}</button>
                <img src={assets.cross_icon} className="w-8 hover:scale-110 transition-all cursor-pointer" />
            </td>

        </tr>
    )
}

export default BlogTableItem