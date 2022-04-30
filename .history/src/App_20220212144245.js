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
      <Routes>
          <Route path='/' component={Homepage} />
          <Route path='/coins/:id ' component={CoinPage} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
