import FirstPage from './Pages/firstPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css'
const theme = createTheme({
  //v5.0.0
  typography: {
      head: {
          fontFamily: 'Quicksand',
          textTransform: 'none',
          fontSize: 30,
          color:'#28A19C'
        },
      labels:{
          fontFamily: 'Quicksand',
          fontSize: 20,
      },
      footnote:
      {
          fontFamily: 'Quicksand',
          fontSize: 14,
      },
      small:
      {
          fontFamily: 'Quicksand',
          fontSize: 14,
      },

  },
});


function App() {
  return (
      <ThemeProvider theme={theme}>
          <FirstPage/>
          
      </ThemeProvider>
  );
}

export default App;
