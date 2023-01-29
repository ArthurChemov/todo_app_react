import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, Box } from "@chakra-ui/react";
import Body from './components/menu/Body';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Box className="min-h-screen h-full w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-orange-500">
          <Body/>
        </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
