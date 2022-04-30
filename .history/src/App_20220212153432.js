import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header'
import Homepage from './Pages/Homepage'
import CoinPage from './Pages/CoinPage'
import { makeStyles } from '@material-ui/core';

function App() {

    const useStyles = makeStyles(() => ({
      App:{
        
      }
    }));

    const classes = useStyles()
  }
  return (
    <div>
    <Header/>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Homepage/>} exact/>
          <Route path='/coins/:id ' element={<CoinPage />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
