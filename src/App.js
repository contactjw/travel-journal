import './App.css';
import Heading from './components/Heading';
import Destination from './components/Destination';
import data from './data';

function App() {
  const cards = data.map((item) => {
    return <Destination key={item.location} item={item} />;
  });

  return (
    <div className="App">
      <Heading />
      {cards}
    </div>
  );
}

export default App;
