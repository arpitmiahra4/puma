import { Box } from '@chakra-ui/react';
import './App.css';
import Footer from './Components/Footer/Footer';

import { Navbar } from './Components/Navbar/Navbar';

import AllRoutes from './Components/Routes/AllRoutes';

function App() {
  return (
    <Box className='App' style={{width:"100%",boxSizing:"border-box"}}>

      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
