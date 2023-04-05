import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Roting from './routing/Roting';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
  <Header/>
  <Roting/>
  <Footer/>
    </div>
  );
}

export default App;
