import { Link } from "react-router-dom";
//import { useState } from "react";

//const BlogList = (prop) => {

//    const blogs = prop.blogs;
//    const title = prop.title;

const BlogList = ({blogs, title, handleDelete}) => {
  
  // const [blogg, setBlogs] = useState(blogs);

  //  const handleDelete=(id) => {
  //        const newBlogs = blogg.filter((blog) => blog.id!==id);   
  //        setBlogs (newBlogs);
  //   }

    return (       
        <div className='para1'>
            <h1>{ title }</h1>
                {blogs.map((blog) => (
                    <div className='blog-preview' key={blog.id}>
                      <Link to = {`/blogs/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written By: {blog.author }</p>
                      </Link>
                        <button className = " btn1 "onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                      
                    </div>
                ))}
        </div>
            
     );
}


 
export default BlogList;