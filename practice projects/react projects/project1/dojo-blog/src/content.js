// import {useState, useEffect} from 'react';
//useEffect is triggered whenever the site is refreshed. and [] is its dependencies...when [] is empty , then on any click on website uesEffect is triggered but when it contains some variable, then it is trigerred only for that attribute
import {useState} from 'react'
import BlogList from './BlogList';
import useFetch from "./useFetch";


const Content = () => {
    //let name = "Siddhi Parekh";
    const { data: blogs, isPending, error  } = useFetch('http://localhost:2000/blogs')
    const [name, setName] = useState("SIDDHI");
    const [age, setAge] = useState(19);
    // const [blogs, setBlogs] = useState([
    //     {title: "My new Website 1", body: 'lorem ipsum...', id:1},
    //     {title: "My new Website 2", body: 'lorem ipsum...', id:2},
    //     {title: "My new Website 3", body: 'lorem ipsum...', id:3}
    // ]);
    
    const handleClick = () => {
        setName ("Siddhi");
        setAge(20);
    }
    const link = "https://www.google.com";

    // const handleDelete=(id) => {
    //      const newBlogs = blogs.filter((blog) => blog.id!==id);   
    //      setBlogs (newBlogs);
    // }


    



    
    return (  
        <div className="home">
            
            <button className="btn" onClick={handleClick}>Click Me</button>
            <div className="para">
                <p>{name} is {age} years old</p>
                <p>Hello!!!</p>
                <a href = {link}>Google</a>
            </div>
            {/* using of props */}
             <h2>All Blogs!!</h2>
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} /> }
            {/* { blogs && <BlogList blogs = {blogs} title = {"All Titles"} handleDelete={handleDelete}/>};   */}
            {/* <BlogList blogs = {blogs.filter((blog) => (blog.title === "My new Website 1"))} title = {"First Title"}/> */}
        </div>
    );
}


 
export default Content;

