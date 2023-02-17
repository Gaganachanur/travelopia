import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'  
import LandingPage from './Components/LandingPage';
import ClientInfo from './Components/ClientInfo';

function App() {
  return (
<div>
    <BrowserRouter> 
    <Routes>
    <Route   path="/" element={<LandingPage />} />  
    <Route exact  path="/clientinfo" element={<ClientInfo />} />  
    </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
