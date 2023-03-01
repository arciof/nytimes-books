import { ThemeProvider } from '@emotion/react'
import BaseLayout from './containers/BaseLayout/BaseLayout'
import FilterContextProvider from './context/FilterContext'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <FilterContextProvider>
                <BaseLayout />
            </FilterContextProvider>
        </ThemeProvider>
    )
}

export default App
