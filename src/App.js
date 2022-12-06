import Entry from "./Entry"
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from "@mui/material/styles";

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
    <div>
      <ThemeProvider theme={theme} >
        <Entry />
      </ThemeProvider>
    </div>
  );
}

export default App;
