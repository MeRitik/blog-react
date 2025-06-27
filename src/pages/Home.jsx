import Blogs from "../components/Blogs"
import Footer from "../components/Footer"
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
            <Footer />
        </>
    )
}

export default Home