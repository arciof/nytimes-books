import styled from '@emotion/styled'
import BooksLists from '../BooksLists/BooksLists'
import Header from '../Header/Header'

const StyledRoot = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '90vh',
    width: '90vw',
    backgroundColor: `${theme.colors.white}73`,
    borderRadius: '20px',
    border: `2px solid ${theme.colors.white}`,
    boxShadow: `0 0 10px 1px ${theme.colors.black}40`,
    backdropFilter: 'blur(15px)',
    '.header': {
        borderRadius: '20px 20px 0 0',
    },
}))

const StyledMainContent = styled.div(({ theme }) => ({
    margin: '20px 5px 20px 20px',
    overflow: 'auto',
    boxSizing: 'border-box',
    scrollbarGutter: 'stable',
    scrollbarWidth: 'none',
    scrollbarColor: `red #010101`,
    '::-webkit-scrollbar': {
        width: '15px',
    },
    '::-webkit-scrollbar-track': {
        background: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
        backgroundColor: theme.colors.lightBlue,
        borderRadius: '10px',
    },
    '.books-list': {
        paddingRight: '10px',
    },
}))

const BaseLayout = () => {
    return (
        <StyledRoot>
            <Header />
            <StyledMainContent>
                <BooksLists />
            </StyledMainContent>
        </StyledRoot>
    )
}

export default BaseLayout
