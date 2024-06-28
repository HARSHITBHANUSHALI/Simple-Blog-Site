import React from 'react'
import {useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
const EditBlog = ({blogs,handleEdit,editBody,setEditBody,setEditTitle,editTitle}) => {
    const {id} = useParams();
    const blog = blogs.find(blog => (blog.id).toString() === id);

    useEffect(()=>{
        if(blog){
            setEditTitle(blog.title);
            setEditBody(blog.body);
        }
    },[blog,setEditBody,setEditTitle]);

  return (
    <main className="AddBlog">
        {blog && 
        <>
            <h2>Edit Blog</h2>
            <form className="newBlogForm" onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="blogTitle">Title:</label>
                <input
                    id="blogTitle"
                    type="text"
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor="blogBody">Blog:</label>
                <textarea
                    id="blogBody"
                    required
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                />
                <button type="submit" onClick={() => editTitle && editBody && handleEdit(blog.id)}>Submit</button>
            </form>
        </>
        }
        {!blog &&
                    <>
                        <h2>Blog Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                }
        </main>
  )
}

export default EditBlog
