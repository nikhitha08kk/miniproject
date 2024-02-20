import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Userrouter from './Router/Userrouter';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Userrouter/>} />
      
       
    </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
