import './App.css';
// import Main from './components/Main/Main';
import StyledGlobal from './styledGlobal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Login from './components/Login/Login';
import Informations from './components/Register/Informations/Informations';
import User from './components/Register/UserRegister/User';
import Form from './components/Register/Forms/Forms';
import Theme from './components/Register/Theme/Theme';
import FeedCommerce from './components/FeedCommerce/FeedCommerce';
import Feed from './components/Feed/Feed';
import Comment from './components/Comment/Comment';
import Search from './components/Seacrh/Search';
import AddPost from './components/AddPost/AddPost';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <StyledGlobal/>
      <AppRoutes/>
    </Router>
  );
}

export default App;
