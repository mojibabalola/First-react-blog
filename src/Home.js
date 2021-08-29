import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending } = useFetch('https://jsonplaceholder.typicode.com/posts');


    return ( 
        <div className="home">
          { isPending && <div>Loading...</div> }
          {blogs && <BlogList blogs={blogs} title="All posts" /> }  
        </div>       
        
     );
}
export default Home;