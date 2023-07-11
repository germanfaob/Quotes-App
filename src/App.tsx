import { ThemeProvider } from "styled-components";
import { theme } from "./globalStyles/theme";
import { GlobalStyles } from "./globalStyles/globalStyles";
import { Quote } from "./components/Quote";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Quote />
    </ThemeProvider>
  );
}

export default App;
