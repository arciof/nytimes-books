import { ThemeProvider } from "@emotion/react"
import BaseLayout from "./containers/BaseLayout/BaseLayout"
import GlobalStyle from "./styles/global"
import theme from "./styles/theme"

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BaseLayout />
        </ThemeProvider>
    )
}

export default App
