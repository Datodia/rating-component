import './App.css';
import { Main } from './components/Main/Main';
import { Thanks } from './components/Thanks/Thanks';

function App() {
  return (
    <div className="app">
      <div className='card'>
        <Main />
        <Thanks />
      </div>

    </div>
  );
}

export default App;
