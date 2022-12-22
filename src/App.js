import './App.css';
import Home from './Components/Home/Home';
// import Home from './Components/Home/Home';
// import Navbar from './Components/Navbar/Navbar';
import AllRoutes from './Components/Routes/AllRoutes';

function App() {
  return (
    <div className="App">
    <AllRoutes />
    <Home />
    </div>
  );
}

export default App;
