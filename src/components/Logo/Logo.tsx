import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import Icon from '../Icon/Icon'

const StyledRoot = styled.span(({ theme }) => ({
    fontWeight: 'bold',
    fontSize: '26px',
    color: theme.colors.blue,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '.material-icon': {
        marginRight: '5px',
    },
}))

const Logo = () => {
    const theme = useTheme()

    return (
        <StyledRoot>
            <Icon
                name="book"
                isFilled={true}
                size={20}
                color={theme.colors.darkBlue}
            />
            NYT Books
        </StyledRoot>
    )
}

export default Logo
