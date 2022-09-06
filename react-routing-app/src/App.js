import logo from './logo.svg';
import './App.css';
import Data from './Components/Data';
import Delete from './Components/Delete';
import Home from './Components/Home';
import Add from './Components/Add';
import Update from './Components/Update';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <br />
        <br />
        <Link to="/Home">
          <h2>Home</h2>
        </Link>

        <Link to="/Data">
          <h2>DataList</h2>
        </Link>

        <Link to="/Add">
          <h2>For Add Operation</h2>
        </Link>

        <Link to="/Delete">
          <h2>For Delete Operation</h2>
        </Link>

        <Link to="/Update">
          <h2>For Update Operation</h2>
        </Link>

        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Data" element={<Data />}></Route>
          <Route path="/Delete" element={<Delete />}></Route>
          <Route path="/Add" element={<Add />}></Route>
          <Route path="/Update" element={<Update />}></Route>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
