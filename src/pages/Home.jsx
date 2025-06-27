import Blogs from "../components/Blogs"
import Header from "../components/Header"
import Newsletter from "../components/Newsletter"
import Hero from "./Hero"

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Blogs />
            <Newsletter />
        </>
    )
}

export default Home