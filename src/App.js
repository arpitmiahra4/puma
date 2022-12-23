import './App.css';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
// import Home from './Components/Home/Home';
// import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Components/Routes/AllRoutes';

function App() {
  return (
    <div className="App">
    <AllRoutes />
    <Home />
    <Footer />
    </div>
  );
}

export default App;
