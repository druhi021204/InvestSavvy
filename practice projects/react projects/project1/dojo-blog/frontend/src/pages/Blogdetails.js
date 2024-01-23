// import { useHistory, useParams } from "react-router-dom";
// import useFetch from "./useFetch";


// const Details = () => {
//     const {id} = useParams();
//     const {data: blog, isPending, error} = useFetch('http://localhost:2000/blogs/' + id);   
//     const history = useHistory();

//     const handleDelete=()=>
//     {
//         fetch('http://localhost:2000/blogs/' + blog.id, {
//         method:'DELETE'
//       }).then(() =>{
//         history.push("/");
//       })
//     } 

//     return ( 
//         <div className="Blog-details">
//             {isPending && <div>Loading...</div>}
//             {error && <div>{error}</div>}
//             {blog && (
//                 <article>
//                     <h2>{blog.id}. {blog.title}</h2>
//                     <p>Written by: {blog.author}</p>
//                     <p>{blog.body}</p>
//                     <button onClick={handleDelete}>Delete Blog</button>
//                 </article>
//             )}
//         </div>
//      );
// }
 
// export default Details;

