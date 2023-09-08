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
import Feed from './components/Feed/Feed';

function App() {
  return (
    <Router>
      <StyledGlobal/>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/Login" Component={Login} />
        <Route path="/Register/Informations" Component={Informations} />
        <Route path='/Register/User' Component={User} />
        <Route path='/Register/Forms' Component={Form} />
        <Route path='/Register/Theme' Component={Theme} />
        <Route path='/Feed' Component={Feed}/>
      </Routes>
    </Router>
  );
}

export default App;
