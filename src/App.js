import GlobalStyle, { AppContainer } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import { SectionHeader } from "./components/SectionHeader/SectionHeader";
import { TitleSection } from "./components/TitleSection/TitleSection";
import { DescriptionSection } from "./components/DescriptionSection/DescriptionSection";
import { BreakDownSection } from "./components/BreakDownSection/BreakDownSection";
import { SuccessSection } from "./components/SuccessSection/SuccessSection";
import { LetGoSection } from "./components/LetGoSection/LetGoSection";
import { EntourageSection } from "./components/EntourageSection/EntourageSection";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyle />
        <AppContainer>
          <TitleSection />
          <SectionHeader title={"description"} />
          <DescriptionSection />

          <SectionHeader title={"how-to-use"} />
          <BreakDownSection />
          <SuccessSection />
          <LetGoSection />

          <SectionHeader title={"cheat-sheet"} />
          <EntourageSection />
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
