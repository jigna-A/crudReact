import './App.css';
import Home from './component/Home';
import Navscroll from './component/Navscroll';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Add from './component/Add';
import Edit from './component/Edit'
import View from './component/View'
function App() {
  return (
    <div className="App">
              <Navscroll/>

      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/edit' element={<Edit/>} />
          <Route path='/view' element={<View/>} />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
