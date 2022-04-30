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
          <Route path='/' element={<Homepage/>} exact/>
          <Route path='/coins/:id ' element={<CoinPage />} />
       
    </BrowserRouter>
    </div>
  );
}

export default App;
