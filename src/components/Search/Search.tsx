import styled from '@emotion/styled'
import Icon from '../Icon/Icon'

const StyledRoot = styled.div(({ theme }) => ({
    color: theme.colors.blue,
    border: `2px solid ${theme.colors.blue}`,
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    padding: '3px 10px',
}))

const StyledInput = styled.input(({ theme }) => ({
    all: 'unset',
    marginLeft: '5px',
    fontSize: '14px',
    '::placeholder': {
        color: theme.colors.lightBlue,
    },
}))

interface SearchProps {
    onChangeCb: any
}

const Search = ({ onChangeCb }: SearchProps) => {
    return (
        <StyledRoot>
            <Icon name={'search'} />
            <StyledInput
                type={'text'}
                placeholder={'What do you want to read?'}
                onChange={(e) => onChangeCb(e.target.value)}
            />
        </StyledRoot>
    )
}

export default Search
