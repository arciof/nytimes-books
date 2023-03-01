import styled from '@emotion/styled'
import { useContext } from 'react'
import Logo from '../../components/Logo/Logo'
import Search from '../../components/Search/Search'
import { FilterContext } from '../../context/FilterContext'

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
    const { searchFilter, setSearchFilter } = useContext(FilterContext)

    return (
        <StyledRoot className="header">
            <Logo />
            <Search
                onChangeCb={(value: string) => setSearchFilter(value)}
                value={searchFilter}
            />
        </StyledRoot>
    )
}

export default Header
