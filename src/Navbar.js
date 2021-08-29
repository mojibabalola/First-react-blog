import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Moji's</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/About">About</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
