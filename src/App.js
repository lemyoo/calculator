import Entry from "./Entry"
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from "@mui/material/styles"
import { Provider } from 'react-redux'
import store from "./store"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: '#0d47a1',
    },
    secondary: {
      light: "#00a0b2",
      main: '#00e5ff',
      contrastText: "#000"
    }
  }
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme} >
        <Entry />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
