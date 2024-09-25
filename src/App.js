import './App.css';
import Create from './Create.js';
import Home from './Home.js';
import Navbar from './Navbar.js';
import BlogDetails from './BlogDetails.js';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NotFound from './NotFound.js';

function App() {
  return (
  <Router>
    <div className="App">
      <Navbar/>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route exact path="/create">
          <Create/>
          </Route>
          <Route exact path="/blogs/:id">
          <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
    </div>
  </Router>
  );
}

export default App;
