import styled from '@emotion/styled'
import Logo from '../Logo/Logo'

const StyledRoot = styled.span(({ theme }) => ({
    width: '100%',
    height: '80px',
    backgroundColor: `${theme.colors.white}55`,
    display: 'flex',
    alignItems: 'center',
    padding: '0 25px',
    boxSizing: 'border-box',
}))

const Header = () => {
    return (
        <StyledRoot className="header">
            <Logo />
        </StyledRoot>
    )
}

export default Header
