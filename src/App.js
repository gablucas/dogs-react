import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import User from './Components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/User/UserProfile';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className='App'>
      <HashRouter>
        <UserStorage>
          <Header />
          <main>
            <Routes className='AppBody'>
              <Route path='/' element={<Home />}/>
              <Route path='login/*' element={<Login />}/>
              <Route path='conta/*' element={<ProtectedRoute><User /></ProtectedRoute>} />
              <Route path='foto/:id' element={<Photo />}/>
              <Route path='perfil/:user' element={<UserProfile />}/>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </HashRouter>
   </div>
  );
}

export default App;
