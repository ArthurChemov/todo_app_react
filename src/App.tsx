import { BrowserRouter } from 'react-router-dom';
import Header from './components/menu/Header';
import Sidebar from './components/menu/Sidebar';

function App() {
  return (
    <section className="h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-orange-500">
    <BrowserRouter>
      <Header/>
      <Sidebar/>
    </BrowserRouter>
    </section>
  );
}

export default App;
