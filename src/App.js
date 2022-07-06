import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header/>
      
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          {/* <Route path="/login" element={<Login/>}/> */}
          {/* <Route path="/register" element={<Register/>}/> */}
          {/* <Route path="/profile" element={<Profile/>}/> */}
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
