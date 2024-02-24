import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Userrouter from './Router/Userrouter';
import Adminrouter from './Router/Adminrouter';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Userrouter/>} />
      <Route path='/admin/*' element={<Adminrouter/>}/>
      
       
    </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
