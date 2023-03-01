import { useTheme } from '@emotion/react'
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
    value: string
}

const Search = ({ onChangeCb, value }: SearchProps) => {
    const theme = useTheme()

    return (
        <StyledRoot>
            <Icon name={'search'} size={24} color={theme.colors.darkBlue} />
            <StyledInput
                type={'text'}
                placeholder={'What do you want to read?'}
                value={value}
                onChange={(e) => onChangeCb(e.target.value)}
            />
        </StyledRoot>
    )
}

export default Search
