import styled from '@emotion/styled'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Search/Search'

const StyledRoot = styled.span(({ theme }) => ({
    width: '100%',
    minHeight: '80px',
    backgroundColor: `${theme.colors.white}55`,
    display: 'flex',
    alignItems: 'center',
    padding: '0 25px',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
}))

const Header = () => {
    return (
        <StyledRoot className="header">
            <Logo />
            <Search onChangeCb={(value: string) => console.log(value)} />
        </StyledRoot>
    )
}

export default Header
