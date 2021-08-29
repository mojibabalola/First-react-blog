import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route  exact path="/">
                <Home />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Route exact path="/posts/:id">
                <BlogDetails />
              </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
