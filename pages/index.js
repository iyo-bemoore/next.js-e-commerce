import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Header from "../components/common/Header";
import PageTopButtons from "../components/common/PageTopButtons";
import { theme } from "../mui.overrides/theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <PageTopButtons />
        <Header />
      </Container>
    </ThemeProvider>
  );
};

export default App;
