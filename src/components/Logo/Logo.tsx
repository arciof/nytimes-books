import styled from '@emotion/styled'
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
    return (
        <StyledRoot>
            <Icon name="book" isFilled={true} />
            NYT Books
        </StyledRoot>
    )
}

export default Logo
