import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import Appbar from './components/appbar';
import theme from './styles/theme';
import Banner from './components/banner';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{ background: '#fff' }}>
        <Appbar /> 
        <Banner />       
      </Container>
    </ThemeProvider>
  );
};

export default App;
