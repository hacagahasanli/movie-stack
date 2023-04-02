import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 11 */
}

body::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Edge */
}
`;
