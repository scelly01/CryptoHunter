import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './components/Header'
import Homepage from './Pages/Homepage'

function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes>
        <Header/>
        
        <Route path='/' component={Homepage} />
        <Route path='/' component={Homepage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
