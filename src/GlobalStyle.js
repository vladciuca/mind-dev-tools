import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  font-family: 'Inconsolata', monospace;
  background-color:  ${({ theme }) => theme.bgPrimary};
  background-image: radial-gradient(ellipse at top,  rgba(255,188,224,0.15), transparent),
            radial-gradient(ellipse at bottom, rgba(170,165,255,0.15), transparent);
  background-attachment: fixed;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.text};
  overflow-x: hidden;
}

* {
    box-sizing: border-box;
  }

::-webkit-scrollbar {
  width: 0.4rem;
}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  box-shadow: 0 4px 30px ${({ theme }) => theme.shadow};
  border: 1px solid ${({ theme }) => theme.cardBorder};
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
