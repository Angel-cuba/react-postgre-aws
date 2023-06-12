import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>

      <h2>Uploading images</h2>
      <img src={logo} className="App-logo" alt="logo" style={{ width: '130px', height: '130px' }} />
      </div>
      <input type="file" name="" id="" />
      <div class="images">
        <h1>All images downloaded from db</h1>
      </div>
    </div>
  );
}

export default App;
