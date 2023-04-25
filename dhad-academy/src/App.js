
import { Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Roting from './routing/Roting';
import RoutesDashboard from './dashboard/Routes/RoutesDashboard';


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