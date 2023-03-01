import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { useState } from 'react'
import Icon from '../Icon/Icon'

const StyledRoot = styled.div(({ theme }) => ({
    width: '100%',
    background: `${theme.colors.white}73`,
    borderRadius: '15px',
    padding: '25px',
}))

const StyledListName = styled.span(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    color: theme.colors.darkBlue,
    fontSize: '24px',
    cursor: 'pointer',
    '.material-icon': {
        marginRight: '10px',
    },
}))

const StyledBooks = styled.div<{ isOpen: boolean }>(({ isOpen }) => ({
    display: isOpen ? 'flex' : 'none',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '10px',
    rowGap: '20px',
    marginTop: '25px',
    '.book': {
        width: '18%',
        height: 'auto',
    },
}))

interface BooksListProps {
    name: string
    children: any
}

const BooksList = (props: BooksListProps) => {
    const theme = useTheme()
    const [isOpen, setIsOpen] = useState<boolean>(true)

    return (
        <StyledRoot>
            <StyledListName onClick={() => setIsOpen(!isOpen)}>
                <Icon
                    name={isOpen ? 'visibility_off' : 'visibility'}
                    color={theme.colors.darkBlue}
                    size={22}
                />
                {props.name}
            </StyledListName>
            <StyledBooks isOpen={isOpen}>{props.children}</StyledBooks>
        </StyledRoot>
    )
}

export default BooksList
