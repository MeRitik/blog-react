const Newsletter = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16 px-4 md:px-0 rounded-lg">
            <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Blog!</h1>
            <p className="md:text-lg text-secondary-foreground pb-8">Subscribe to our newsletter for the latest updates.</p>

            <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
                <input className="border border-secondary rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-secondary-foreground" type="email" placeholder="Enter your email" />
                <button className="md:px-12 px-8 h-full text-primary-foreground bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none" type="submit">Subscribe</button>
            </form>
        </div>
    )
}

export default Newsletter