import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Header from "../components/common/Header";
import { theme } from "../mui.overrides/theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
};

export default App;
