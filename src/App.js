import './App.css';
import Header from './Components/Header';
import HeadLines from './Components/HeadLines'
import SearchBar from './Components/SearchBar'
import SearchResults from './Components/SearchResults'

function App() {
  return (
    <div className="App">
      
    <div className="AppHeader">
      <Header/>
    </div>

    <div className="AppHeadLines">
      <HeadLines/>
    </div>

    <div className="AppSearchbar">
      <SearchBar/>
    </div>

    <div className="AppSearchResults">
      <SearchResults/>
    </div>

    </div>
  );
}

export default App;
