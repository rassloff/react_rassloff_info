import './App.css';
import BootstrapNavbar from './BootstrapNavbar';
import BootstrapFooter from './components/BootstrapFooter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BootstrapNavbar />
      </header>

      <BootstrapFooter />
    </div>
  );
}

export default App;
