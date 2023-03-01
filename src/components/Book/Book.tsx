import styled from '@emotion/styled'
import BookRank from './BookRank'

const StyledRoot = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
}))

const StyledImage = styled.img(() => ({
    borderRadius: '10px',
    width: '100%',
    height: 'auto',
}))

const StyledInfos = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    background: theme.colors.white,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius: '0 0 10px 10px',
    padding: '15px 10px',
}))

const StyledTitle = styled.span(({ theme }) => ({
    fontWeight: 'bold',
    color: theme.colors.darkBlue,
    fontSize: '13px',
    marginBottom: '3px',
}))

const StyledAuthor = styled.span(({ theme }) => ({
    color: theme.colors.lightBlue,
    fontSize: '12px',
    marginBottom: '5px',
}))

interface BookProps {
    book: Book
}

const Book = ({ book }: BookProps) => {
    return (
        <StyledRoot className="book">
            <StyledImage src={book.book_image} />
            <StyledInfos>
                <StyledTitle>{book.title}</StyledTitle>
                <StyledAuthor>{book.author}</StyledAuthor>
                <BookRank
                    currentRank={book.rank}
                    lastWeekRank={book.rank_last_week}
                />
            </StyledInfos>
        </StyledRoot>
    )
}

export default Book
