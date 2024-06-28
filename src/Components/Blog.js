import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    return (
        <article className="blog">
            <Link to={`/blog/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p className="blogDate">{blog.datetime}</p>
            <p className="blogBody">{
                (blog.body).length <= 25
                ? blog.body
                : `${(blog.body).slice(0, 25)}...`
            }</p>
            </Link>
        </article>
    )
}

export default Blog