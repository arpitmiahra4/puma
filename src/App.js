import './App.css';
import Footer from './Components/Footer/Footer';
import { Navbar } from './Components/Navbar/Navbar';
// import SingleProduct from './Components/Product/SingleProduct';
import AllRoutes from './Components/Routes/AllRoutes';

function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      {/* <SingleProduct /> */}
      <Footer />
    </> 
  );
}

export default App;
