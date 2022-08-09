import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./theme";
import { Home } from "./pages/Home";
import { Tools } from "./pages/Tools";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
