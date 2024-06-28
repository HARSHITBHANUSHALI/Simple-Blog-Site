import Feed from './Feed';

const Home = ({ blogs }) => {
    return (
        <main className="Home">
            {blogs.length ? (
                <Feed blogs={blogs} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No blogs to display.
                </p>
            )}
        </main>
    )
}

export default Home