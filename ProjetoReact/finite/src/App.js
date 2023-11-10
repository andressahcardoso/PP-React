import './App.css';
import StyledGlobal from './styledGlobal';
import { ThemeProvider } from './context/ThemeContext';
import ThemedComponent from './pages/Register/Theme/Theme2';

// APP Routes
import AppRoutes from './routes';

function App() {
  return (
      <>
      <ThemeProvider>
        <StyledGlobal/>
        <AppRoutes/>
      </ThemeProvider>
      </>
  );
}

export default App;


