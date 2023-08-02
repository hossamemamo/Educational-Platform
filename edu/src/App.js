import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css'
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Quicksand',
      textTransform: 'none',
      fontSize: 16,
    },
  },
});


function App() {
  return (
      <ThemeProvider theme={theme}>
          <Header/>
          <Footer/>
      </ThemeProvider>
  );
}

export default App;
