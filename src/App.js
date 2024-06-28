import Home from './Components/Home';
import BlogDetails from './Components/BlogDetails';
import {useEffect, useState} from 'react';
import AddBlog from './Components/AddBlog';
import { format } from 'date-fns';
import api from './api/blogs'
import {Route,Routes,useNavigate} from 'react-router-dom';
import Missing from './Components/Missing';
import About from './Components/About';
import Layout from './Components/Layout';
import EditBlog from './Components/EditBlog';

function App() {
  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogBody, setBlogBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchBlogs = async () =>{
      try{
        const response = await api.get('/blogs');
        if(response && response.data)
          setBlogs(response.data);

      }
      catch(err){
        if(err.response){
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        }
        else{
          console.log(`Error: ${err.message}`);
        }
      }
    }
    fetchBlogs();
  },[])

  useEffect(() => {
    const filteredResults = blogs.filter((blog) =>
      ((blog.body).toLowerCase()).includes(search.toLowerCase())
      || ((blog.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [blogs, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = blogs.length ? blogs[blogs.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newBlog = { id, title: blogTitle, datetime, body: blogBody };
    try{
      const response = await api.post('/blogs',newBlog);
      const allBlogs = [...blogs, response.data];
      setBlogs(allBlogs);
      setBlogTitle('');
      setBlogBody('');
      navigate('/');
    }catch(err){
      console.log(`Error: ${err.message}`)
    }
  }

  const handleDelete = async (id) => {
    try{
      await api.delete(`/blogs/${id}`)
      const blogsList = blogs.filter(blog => blog.id !== id);
      setBlogs(blogsList);
      navigate('/');
    }catch(err){
      console.log(`Error: ${err.message}`)
    }
    
  }

  const handleEdit = async (id) => {
    const newDateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const editBlog = {id,title:editTitle,newDateTime,body:editBody}
    try{
      const response = await api.put(`/blogs/${id}`,editBlog);
      setBlogs(blogs.map(blog=> blog.id === id ?{...response.data}:blog));
      setEditTitle('');
      setEditBody('');
      navigate('/');
    }catch(err){
      console.log(`Error: ${err.message}`);
    }
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout search={search} setSearch={setSearch}/>}>
          <Route index element={<Home blogs={searchResults} />} />
          <Route path="blog">
            <Route index element={<AddBlog
              handleSubmit={handleSubmit}
              blogTitle={blogTitle}
              setBlogTitle={setBlogTitle}
              blogBody={blogBody}
              setBlogBody={setBlogBody}
            />} />
            <Route path=":id" element={<BlogDetails
              blogs={blogs}
              handleDelete={handleDelete}
            />} 
            />
          </Route>
          <Route path="edit/:id" element={<EditBlog
            blogs={blogs}
            handleEdit={handleEdit}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
          />}/>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App

  
