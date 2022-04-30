import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header'
import Homepage from './Pages/Homepage'
import CoinPage from './Pages/CoinPage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route path='/' component={Homepage} exact/>
        <Route path='/coins/:id ' component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
