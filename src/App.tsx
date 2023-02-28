import { ThemeProvider } from "@emotion/react"
import GlobalStyle from "./theme/global"
import theme from "./theme/theme"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
