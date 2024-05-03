import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DICTIONARY</h1>
      </header>
      <main>
        <Dictionary defaultSearchKeyword="nature" />
      </main>
      <footer>
        <p>This project was coded by <a href='https://github.com/punSavitri' target='_blank' rel="noreferrer" title='Savitri GitHub repo' >Savitri Pun</a>  and <a href="https://github.com/punSavitri/react-dictionary-project"> is open-sourced on GitHub </a>and <a href="https://react-dictionary-savitri.netlify.app/"> is hosted on Netlify</a></p>
      </footer>
    </div>
  );
}

export default App;
