// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Herocarousel from './components/Herocarousel'
import Overview from './components/Overview'
import Highlight from './components/Highlight'
import Vana from './components/Vana'
function App() {
  return (
    <div className="App">
      <Header/>
      <Herocarousel/>
      <Overview/>
      <Highlight/>
      <Vana/>
    </div>
  );
}

export default App;
