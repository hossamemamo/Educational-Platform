import Header from "./components/Header";
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
    <div >
      <ThemeProvider theme={theme}>
          <Header/>
      </ThemeProvider>

    </div>
  );
}

export default App;
