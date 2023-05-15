import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <div style={{ 
      backgroundImage: `url("background.jpg")`,
      height:"100vh",
      width:"100vw"
    }}>
      <Navbar/>
    </div>
     
    </div>
  );
}

export default App;
