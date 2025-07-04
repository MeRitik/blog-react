import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

const initialBlogsData = {
    "posts": [],
    "pageNumber": 0,
    "pageSize": 0,
    "totalPages": 0,
    "totalElements": 0,
    "lastPage": false
};

export const AppProvider = ({ children }) => {

    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);
    const [blogs, setBlogs] = useState(initialBlogsData);
    const [input, setInput] = useState('');
    const [error, setError] = useState(null);

    const fetchBlogs = async () => {
        try {
            const res = await axios.get("/api/posts");
            const data = res.data;

            if (data.totalElements) {
                setBlogs(data);
            } else {
                toast.error("Blogs not found");
            }
        } catch (e) {
            setError(e.message)
        }
    }


    useEffect(() => {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        if (token) {
            setToken(token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        }

        fetchBlogs();
    }, []);

    const value = {
        axios,
        token,
        setToken,
        blogs,
        setBlogs,
        input,
        setInput,
        error,
        setError,
        userId,
        setUserId,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}