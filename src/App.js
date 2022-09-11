import './General.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Inicio } from './components/Inicio'
function App() {
  return (
    <div className="content">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
