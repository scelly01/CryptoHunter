import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header'
import Homepage from './Pages/Homepage'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Routes>
        <Route path='/' component={Homepage} />
        <Route path='/coins/:id ' component={Homepage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
