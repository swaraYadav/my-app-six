import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Frame from './components/Frame';
function App() {
  return (
    <div>
      
      <Navbar></Navbar>
      <div className='body'>
        <Sidebar></Sidebar>
        <Frame></Frame>


      </div>
    </div>

  );
}

export default App;
