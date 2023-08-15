import Home from './Pages/Home';
import Courses from './Pages/Courses';
import CourseDetails from './Pages/CourseDetails';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import './index.css'

import { Provider } from 'react-redux';
import { store } from './store';


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
          textTransform: 'none',
          fontSize: 20,
      },
      footnote:
      {
          fontFamily: 'Quicksand',
          textTransform: 'none',
          fontSize: 14,
      },
      small:
      {
          fontFamily: 'Quicksand',
          textTransform: 'none',
          fontSize: 14,
      },
      vsmall:
      {
          fontFamily: 'Quicksand',
          textTransform: 'none',
          fontSize: 10,
      }
      ,
      medium:{
        fontFamily: 'Quicksand',
        textTransform: 'none',
        fontSize: 20,

      },
      big:{
        fontFamily: 'Quicksand',
        textTransform: 'none',
        fontSize: 25,
      },
      tabs:{
        fontFamily: 'Quicksand',
        textTransform: 'none',
        fontSize: 16,
      },
      cardHeader:{
        fontFamily: 'Quicksand',
        textTransform: 'none',
        fontSize: 16
      },
      rating:{
        fontFamily: 'Quicksand',
        textTransform: 'none',
        fontSize: 15,
      },
      pricing:{
        fontFamily: 'Quicksand',
        textTransform: 'none',
        fontSize: 16,
      },
      instructors:{
        fontFamily: 'Quicksand',
        textTransform: 'none',
        fontSize: 13,
      },
      headimg: {
        fontFamily: 'Quicksand',
        textTransform: 'none',
        fontSize: 40,
        color:'#28A19C'
      },


  },
});


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetails/>}/>
        </Routes>
      </BrowserRouter>

      </ThemeProvider>
      </Provider>
  );
}

export default App;
