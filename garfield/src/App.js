import { useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import AppBar from './components/appbar';
import Banner from './components/banner';
import Body from './components/body';
import CustomizedButton from './components/button';
import Contact from './components/contact';
import Pictures from './components/pictures';

function App() {
  useEffect(() => {
    document.title = "Burt Garfield For County Assessor";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth = "xl"
        sx={{
          background: "#d4dfee" //color of page
        }}
      > 
        <Banner />
        <Body />
        <Pictures />
        <Contact />
      </Container>
    </ThemeProvider>
  );
}

export default App;
