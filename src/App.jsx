import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
