import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white w-screen h-max">
      <div className="App">
        <BrowserRouter>

          <Header/>
        
          <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/login" element={<Login/>}/> */}
            {/* <Route path="/register" element={<Register/>}/> */}
            {/* <Route path="/profile" element={<Profile/>}/> */}
          </Routes>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
