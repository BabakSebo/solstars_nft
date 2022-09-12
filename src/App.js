import "./App.css";
import { createTheme, ThemeProvider, Divider } from "@mui/material";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Prizes from "./pages/Prizes";
import Faq from "./pages/Faq";
import JoinDiscord from "./pages/JoinDiscord";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
    example: {
      main: "#eddcc7",
    },
  },
  typography: {
    fontFamily: ["Silkscreen"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Home />
        <div className="pageTwo">
          <Divider />
          <About />
          <Divider />
        </div>
        <div className="pageThree">
          <Team />
          <Prizes />
          <br />
        </div>
        <div className="pageFour">
          <Faq />
          <JoinDiscord />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
