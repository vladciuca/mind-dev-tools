import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 800px;
  margin: auto;
`;

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    font-family: monospace;
    background-color:  ${({ theme }) => theme.bgPrimary};
    background-image: radial-gradient( circle farthest-corner at 0.8% 3.1%,  rgba(255,188,224,0.15) 0%, rgba(170,165,255,0.15) 46%, rgba(66,39,90,0.15) 100.2% );    
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: ${({ theme }) => theme.text}
}

::-webkit-scrollbar {
  width: 0.7rem;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
 
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.6); 
  opacity: 0.1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.8);
}
`;

export default GlobalStyle;
