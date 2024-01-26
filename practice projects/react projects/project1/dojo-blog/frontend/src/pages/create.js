// import { useState } from "react";
// import { useHistory } from "react-router-dom";

// const Create = () => {
//     const [title, setTitle]=useState('');
//     const [author, setAuthor] = useState('');
//     const [body, setBody] = useState('');
//     // const [isPending, setIsPending] = useState(false); 
//     const history = useHistory();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const blog = {title, body, author};

//         //to store the data inside the json file when user clicks on the submit button(add blog) 

//         //JSON.strigify(blog)= converts blog into a json string.

//         fetch('http://localhost:2000/blogs', {
//             method: 'POST',
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(blog)
//         }).then(() => 
//         {
//             console.log("New blog added");
//             // setIsPending(false);
//             history.push("/");
//         })


//     }

//     return (  
//         <div className="create">
//             <h3>Add a new blog</h3>
//             <form onSubmit={handleSubmit}>
//                 <label>Blog Title:</label>
//                 <input type ="text" required 
//                 value={title} 
//                 onChange={(e) => setTitle(e.target.value)}
//                 />
//                 <pre>
//                 <label>Blog Body:</label>  
//                 <textarea required
//                 value={body} 
//                 onChange={(e) => setBody(e.target.value)}/>
//                 </pre>
//                 <pre>
//                 <label>Blog author:</label>
//                 <select 
//                 value={author} 
//                 onChange={(e) => setAuthor(e.target.value)}
//                 >
//                     <option value="anonymous">Select</option>
//                     <option value="mario">Mario</option>
//                     <option value='yoshi'>Yoshi</option>
//                 </select>
//                 </pre>
//                 <pre>
//                 {/* {!isPending && <button>Add Blog</button>}
//                 {isPending && <button disabled>Processing</button>} */}
//                 <button>Add Blog</button>
//                 </pre>
//                 {/* <p>{title}</p>
//                 <p>{author}</p> */}
//             </form>
//         </div>
//     );
// }
 
// export default Create;