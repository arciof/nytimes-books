import styled from '@emotion/styled'

const StyledRoot = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
}))

const StyledImage = styled.img(({ theme }) => ({
    borderRadius: '20px',
    width: 'auto',
    height: '100%',
    marginBottom: '10px',
}))

const StyledTitle = styled.span(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.colors.darkBlue,
    fontSize: '20px',
}))

const StyledAuthor = styled.span(({ theme }) => ({
    color: theme.colors.lightBlue,
    fontSize: '14px',
}))

interface BookProps {
    imageURL: string
    title: string
    author: string
}

const Book = (props: BookProps) => {
    return (
        <StyledRoot>
            <StyledImage src={props.imageURL} />
            <StyledTitle>{props.title}</StyledTitle>
            <StyledAuthor>{props.author}</StyledAuthor>
        </StyledRoot>
    )
}

export default Book
