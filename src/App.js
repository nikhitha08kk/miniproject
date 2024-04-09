import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userrouter from './Router/Userrouter';
import Adminrouter from './Router/Adminrouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Userrouter />} />
          <Route path='/admin/*' element={<Adminrouter />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer /> {/* Add ToastContainer component */}
    </div>
  );
}

export default App;
