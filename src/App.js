import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="app">
      <div className="container">
      <header className="App-header">
       Dictionary App
      </header>
      <main className="dictionary">
        <Dictionary/>
          </main>
      <footer className="footer">
        <a href="https://github.com/elhamiakbari/homework1-react/" target="_blank" rel="noreferrer">Opensourced</a> code by Elham Akbari
      </footer>
      </div>
    </div>
  );
}
