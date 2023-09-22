import './App.css';
import StyledGlobal from './styledGlobal';

// React Router
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';

import { UserProvider } from './components/Stories/UserContext';

function App() {
  return (
    <UserProvider>
    <Router>
      <StyledGlobal/>
      <AppRoutes/>
    </Router>
    </UserProvider>
  );
}

export default App;
