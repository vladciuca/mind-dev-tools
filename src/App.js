import GlobalStyle, { AppContainer } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
import { SectionHeader } from "./components/SectionHeader/SectionHeader";
import { TitleSection } from "./components/TitleSection/TitleSection";
import { SuccessSection } from "./components/SuccessSection/SuccessSection";
import { EntourageSection } from "./components/EntourageSection/EntourageSection";
import { LetGoSection } from "./components/LetGoSection/LetGoSection";
//TEST(to be remove)
import { Container } from "./components/NavBar/NavBar.styles";
import { Spacer, InfoText } from "./components/UI/UI.styles";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyle />
        <AppContainer>
          <TitleSection />
          <SectionHeader title={"Description:"} />

          <div>
            <InfoText>
              You don't need to be a programmer to start reprogramming the mind.
            </InfoText>
            <InfoText>
              Through understanding you can install new functions as concepts
              and reprogram subconscious behaviours and believes about yourself.
            </InfoText>
            {/* <InfoText>
              Success is not doing extraordinary things, SUCCESS is doing
              ordinary things extraordinary well.
            </InfoText> */}
            <InfoText>
              You can start installing new functions in your subconscious by
              using our apps! We gamify self-development <u>FORMULAS</u> so that
              its as intuitive as playing a video game!
            </InfoText>
          </div>
          <SectionHeader title={"How to use:"} />
          <SuccessSection />

          <LetGoSection />
          <SectionHeader title={"Cheat Sheet:"} />
          <EntourageSection />
          <Spacer />
          {/* <Container>NavBar</Container> */}
        </AppContainer>
      </>
    </ThemeProvider>
  );
}

export default App;
