import './App.css';

function App() {
  const randomNum = Math.floor(Math.random() * 4 + 1);
  return (
    <div className="App">
      <h1>{randomNum}</h1>
    </div>
  );
}

export default App;
