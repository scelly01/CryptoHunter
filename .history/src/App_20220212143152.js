import './App.css';
import { BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route path='/' component={Homrpage}/>
        <Route path='/' component={Homrpage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
