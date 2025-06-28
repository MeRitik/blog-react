import React, { useEffect, useState } from 'react'
import { comments_data } from '../../assets/assets';
import CommentTableItem from './CommentTableItem';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [filter, setFilter] = useState('Not Approved');

    async function fetchComments() {
        setComments(comments_data);
    }

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div className='flex-1 pt-4 px-5 sm:pt-12 sm:pl-16 bg-accent/30'>
            <div className='flex items-center justify-between max-w-3xl'>
                <h1>Comments</h1>
                <div className='flex gap-4'>
                    <button onClick={() => setFilter('Approved')} className={`shadow border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Approved' ? 'text-primary' : 'text-foreground'}`}>Approved</button>

                    <button onClick={() => setFilter('Not Approved')} className={`shadow border rounded-full px-4 py-1 cursor-pointer text-xs ${filter === 'Not Approved' ? 'text-primary' : 'text-foreground'}`}>Not Approved</button>
                </div>
            </div>

            <div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-card shadow rounded-lg no-scrollbar'>
                <table className='w-full text-sm text-foreground/60'>
                    <thead className='text-xs text-foreground text-left uppercase border-b border-accent'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>Blog Title & Comment</th>
                            <th scope='col' className='px-6 py-3 max-sm:hidden'>Date</th>
                            <th scope='col' className='px-6 py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.filter(comment => filter === 'Approved' ? comment.isApproved : !comment.isApproved).map((comment) => (<CommentTableItem key={comment._id} comment={comment} fetchComments={fetchComments} />))}
                    </tbody>

                </table>
            </div>

        </div>
    )
}

export default Comments