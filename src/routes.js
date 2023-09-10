import './App.css';
import { Routes, Route } from 'react-router-dom';

// Components
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Informations from './components/Register/Informations/Informations';
import User from './components/Register/UserRegister/User';
import Form from './components/Register/Forms/Forms';
import Theme from './components/Register/Theme/Theme';
import FeedCommerce from './components/FeedCommerce/FeedCommerce';
import Feed from './components/Feed/Feed';
import Comment from './components/Comment/Comment';
import Search from './components/Search/Search';
import AddPost from './components/AddPost/AddPost';
import Config from './components/Config/Config';
import UserAccount from './components/UserAccount/UserAccount';
import Stories from './components/Stories/Stories';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/Login" Component={Login} />
        <Route path="/Register/Informations" Component={Informations} />
        <Route path='/Register/User' Component={User} />
        <Route path='/Register/Forms' Component={Form} />
        <Route path='/Register/Theme' Component={Theme} />
        <Route path='/Feed/Commerce' Component={FeedCommerce} />
        <Route path='/Feed' Component={Feed} />
        <Route path='/Comment' Component={Comment} />
        <Route path='/Search' Component={Search} />
        <Route path='/Add/Post' Component={AddPost} />
        <Route path='/Config' Component={Config} />
        <Route path='/User/Account' Component={UserAccount} />
        <Route path='/Stories' Component={Stories} />
      </Routes>
  );
}

export default AppRoutes;
