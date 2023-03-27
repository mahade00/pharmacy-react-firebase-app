import logo from './logo.svg';
import './App.css';
import NavBar from './pages/NavBar/NavBar';
import Header from './pages/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Header/>} />
         
          </Routes>
      </BrowserRouter>
   
      
    </div>
  );
}

export default App;
