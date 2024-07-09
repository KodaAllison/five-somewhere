import './App.css';
import FivePMPlaces from './components/FivePMPlaces';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="text-center font-sans">5 o'clock somewhere!!</h1>
      </header>
      <p className='font-medium text-center pt-2'>It is currently 5 o clock in the following places: </p>
      <div className="p-5">
        <FivePMPlaces />
      </div>
      <p className="mt-4 text-lg text-center">Cheers!</p>
    </div>
  );
}

export default App;
