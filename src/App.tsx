import { ThemeProvider } from "@emotion/react"
import GlobalStyle from "./styles/global"
import theme from "./styles/theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
