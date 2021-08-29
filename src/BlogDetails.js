import { useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending } = useFetch('https://jsonplaceholder.typicode.com/posts/' + id);


    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { blog && (
                <article>
                    <h2>{ blog.title } </h2>
                    <div>{ blog.body }</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;