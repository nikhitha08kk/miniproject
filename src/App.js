import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Userrouter from './Router/Userrouter';
import Adminrouter from './Router/Adminrouter';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast notifications
import { WishlistProvider } from '../../frontend/src/Components/User/shop/WishlistContext'; // Import WishlistProvider
function App() {
  return (
    <div className='App'>
            <WishlistProvider> {/* Wrap the app with WishlistProvider */}
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Userrouter />} />
          <Route path='/admin/*' element={<Adminrouter />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer /> {/* Add ToastContainer component */}
      </WishlistProvider>
    </div>
  );
}

export default App;
