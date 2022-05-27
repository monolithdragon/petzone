import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import Appbar from './components/appbar';
import theme from './styles/theme';
import Banner from './components/banner';
import Promotions from './components/promotions';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{ background: '#fff' }}>
        <Appbar /> 
        <Banner />
        <Promotions />      
      </Container>
    </ThemeProvider>
  );
};

export default App;
