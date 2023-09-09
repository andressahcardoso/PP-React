import './App.css';
import StyledGlobal from './styledGlobal';

// React Router
import { BrowserRouter as Router } from 'react-router-dom';
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
