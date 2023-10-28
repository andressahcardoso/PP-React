import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

// Components
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Informations from './pages/Register/Informations/Informations';
import User from './pages/Register/UserRegister/User';
import Form from './pages/Register/Forms/Forms';
import Theme from './pages/Register/Theme/Theme';
import FeedCommerce from './components/FeedCommerce/FeedCommerce';
import Feed from './components/Feed/Feed';
import Comment from './components/Comment/Comment';
import Search from './components/Search/Search';
import AddPost from './components/AddPost/AddPost';
import Config from './components/Config/Config';
import UserAccount from './components/UserAccount/UserAccount';
import Stories from './components/Stories/Stories';
import UserStorie from './components/UserStorie/UserStorie';
import Categorie from './components/Categories/Categories';
import Ranking from './components/Ranking/Ranking';
import Report from './components/Report/Report';
import UserSettings from './components/UserSettings/UserSettings';

const PrivateRoute = ({children}) => {
  const isAuthenticated = localStorage.getItem("@Auth:token") !== null;
  return isAuthenticated ? children : <Navigate to='/'/>
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public routes */}
        <Route path="/" Component={Main} />
        <Route path="/Login" Component={Login} />
        <Route path="/Register/Informations" Component={Informations} />
        <Route path='/Register/User' Component={User} />
        <Route path='/Register/Forms' Component={Form} />
        <Route path='/Register/Theme' Component={Theme} />
        <Route path='/Feed/Commerce' Component={FeedCommerce} />

        {/* Private routes */}
        <Route path="/Feed" element={<PrivateRoute><Feed/></PrivateRoute>} />
        <Route path="/Comment" element={<PrivateRoute><Comment/></PrivateRoute>} />
        <Route path="/Search" element={<PrivateRoute><Search/></PrivateRoute>} />
        <Route path="/Add/Post" element={<PrivateRoute><AddPost/></PrivateRoute>} />
        <Route path="/Config" element={<PrivateRoute><Config/></PrivateRoute>} />
        <Route path="/User/Account" element={<PrivateRoute><UserAccount/></PrivateRoute>} />
        <Route path="/Stories" element={<PrivateRoute><Stories/></PrivateRoute>} />
        <Route path="/User/Storie" element={<PrivateRoute><UserStorie/></PrivateRoute>} />
        <Route path="/Categorie" element={<PrivateRoute><Categorie/></PrivateRoute>} />
        <Route path="/Ranking" element={<PrivateRoute><Ranking/></PrivateRoute>} />
        <Route path="/Report" element={<PrivateRoute><Report/></PrivateRoute>} />
        <Route path="/User/Settings" element={<PrivateRoute><UserSettings/></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
