import { BrowserRouter } from 'react-router-dom';
import { Box } from "@chakra-ui/react";
import Header from './components/menu/Header';
import Sidebar from './components/menu/Sidebar';

function App() {
  return (
    <Box className="h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-orange-500">
      <BrowserRouter>
        <Header/>
        <Sidebar/>
      </BrowserRouter>
    </Box>
  );
}

export default App;
