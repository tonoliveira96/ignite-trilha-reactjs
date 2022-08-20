
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/defaultTheme';

function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <GlobalStyle />
        Hello World
    </ThemeProvider>
  );
}

export default App;
