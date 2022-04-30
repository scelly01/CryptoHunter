import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header'
import Homepage from './Pages/Homepage'
import CoinPage from './Pages/CoinPage'

function App() {
  return (
    <div>
    <Header/>
    <BrowserRouter>
      <div>
      <Routes>
          <Route path='/' component={Homepage} />
          <Route path='/coins/:id ' component={CoinPage} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
