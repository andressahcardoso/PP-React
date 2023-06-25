import './App.css';
// import Main from './components/Main/Main';
import StyledGlobal from './styledGlobal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <StyledGlobal/>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/Login" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
