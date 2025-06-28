import { useEffect, useState } from 'react'
import { assets, dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/admin/BlogTableItem';

const Dashboard = () => {

    const [dashboardData, setDashboardData] = useState({
        blogs: 0,
        comments: 0,
        drafts: 0,
        recentBlogs: [],
    });

    async function fetchDashboardData() {
        setDashboardData(dashboard_data);
    }

    useEffect(() => {
        fetchDashboardData();
    }, []);


    return (
        <div className='flex-1 p-4 md:p-10 bg-accent/30'>
            <div className='flex flex-wrap gap-4'>

                <div className='flex items-center gap-4 p-4 0 rounded-lg min-w-58 shadow-lg shadow-accent cursor-pointer hover:scale-105 bg-card transition-all duration-300 ease-in-out'>
                    <img src={assets.dashboard_icon_1} alt="dashboard icon" />
                    <div >
                        <p className='text-xl font-semibold text-foreground'>{dashboardData.blogs}</p>
                        <p className='text-sm text-foreground/70'>Blogs</p>

                    </div>
                </div>

                <div className='flex items-center gap-4 p-4 0 rounded-lg min-w-58 shadow-lg shadow-accent cursor-pointer hover:scale-105 bg-card transition-all duration-300 ease-in-out'>
                    <img src={assets.dashboard_icon_2} alt="dashboard icon" />
                    <div >
                        <p className='text-xl font-semibold text-foreground'>{dashboardData.comments}</p>
                        <p className='text-sm text-foreground/70'>Comments</p>

                    </div>
                </div>

                <div className='flex items-center gap-4 p-4 0 rounded-lg min-w-58 shadow-lg shadow-accent cursor-pointer hover:scale-105 bg-card transition-all duration-300 ease-in-out'>
                    <img src={assets.dashboard_icon_3} alt="dashboard icon" />
                    <div >
                        <p className='text-xl font-semibold text-foreground'>{dashboardData.drafts}</p>
                        <p className='text-sm text-foreground/70'>Drafts</p>

                    </div>
                </div>
            </div>

            <div>
                <div className='flex items-center gap-3 m-4 mt-6 text-foreground'>
                    <img src={assets.dashboard_icon_4} />
                    <h1>Recent Blogs</h1>
                </div>

                <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg no-scrollbar bg-accent'>
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
                            {dashboardData.recentBlogs.map((blog, index) => (
                                <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboardData} index={index + 1} />
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )
}

export default Dashboard