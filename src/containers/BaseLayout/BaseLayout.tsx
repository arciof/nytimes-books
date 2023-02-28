import styled from '@emotion/styled'
import Header from '../Header/Header'

const StyledRoot = styled.div(({ theme }) => ({
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

const BaseLayout = () => {
    return (
        <StyledRoot>
            <Header />
        </StyledRoot>
    )
}

export default BaseLayout
