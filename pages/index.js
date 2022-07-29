import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Header from "../components/common/Header";
import PageTopButtons from "../components/common/PageTopButtons";
import Hero from "../components/hero/Hero";
import { theme } from "../mui.overrides/theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <PageTopButtons />
        <Header />
      </Container>
      <Hero />
    </ThemeProvider>
  );
};

export default App;
