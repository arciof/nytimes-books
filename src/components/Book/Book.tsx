import styled from '@emotion/styled'

const StyledRoot = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}))

const StyledImage = styled.img(({ theme }) => ({
    borderRadius: '10px',
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
}))

const StyledTitle = styled.span(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.colors.darkBlue,
    fontSize: '14px',
    marginBottom: '2px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}))

const StyledAuthor = styled.span(({ theme }) => ({
    color: theme.colors.lightBlue,
    fontSize: '12px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
}))

interface BookProps {
    imageURL: string
    title: string
    author: string
}

const Book = (props: BookProps) => {
    return (
        <StyledRoot className="book">
            <StyledImage src={props.imageURL} />
            <StyledTitle>{props.title}</StyledTitle>
            <StyledAuthor>{props.author}</StyledAuthor>
        </StyledRoot>
    )
}

export default Book
