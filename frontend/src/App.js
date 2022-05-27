import { Box, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import Appbar from './components/appbar';
import theme from './styles/theme';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{ background: '#fff' }}>
        <Appbar /> 
        <Banner />
        <Promotions />
        <Box display='flex' justifyContent={'center'} sx={{ p: 4 }}>
          <Typography variant='h4'>Our Products</Typography>
        </Box>
        <Products />     
      </Container>
    </ThemeProvider>
  );
};

export default App;
