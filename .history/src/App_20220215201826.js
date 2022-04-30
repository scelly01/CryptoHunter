import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from './components/Banner/Header'
import Homepage from './Pages/Homepage'
import CoinPage from './Pages/CoinPage'
import { makeStyles } from '@material-ui/core';

function App() {

    const useStyles = makeStyles(() => ({
      App: {
        backgroundColor: "#14161a",
        color: "white",
        minHeight: "100vh"
      },
    }));

    const classes = useStyles();
  
  return (
    <div className={classes.App}>
    <Header/>
    <BrowserRouter>
      <Switch>
          <Route path='/' element={<Homepage/>} exact/>
          <Route path='/coins/:id ' element={<CoinPage />} exact/>
        </Switch>
    </BrowserRouter>
    <Homepage />
    </div>
  );
}

export default App;
