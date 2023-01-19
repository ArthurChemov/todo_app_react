import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';

function App() {
  return (
    <section className="h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-orange-500">
      <Header/>
      <Sidebar/>
    </section>
  );
}

export default App;
