import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import Appbar from './components/appbar';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{ background: '#fff' }}>
        <Appbar />        
      </Container>
    </ThemeProvider>
  );
};

export default App;
