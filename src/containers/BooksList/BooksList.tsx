import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import fetchBooksLists from '../../api/fetchBooksLists'
import Book from '../../components/Book/Book'

const StyledRoot = styled.div(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '10px',
    '.book': {
        width: '18%',
        height: 'auto',
    },
}))

const BooksList = () => {
    const [booksLists, setBooksLists] = useState<BooksList[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchBooksLists()
                setBooksLists(response.results.lists)
            } catch (e) {}
        }

        fetchData()
    }, [])

    return (
        <StyledRoot className="books-list">
            {booksLists.map((list: BooksList) =>
                list.books.map((book: Book) => (
                    <Book
                        key={book.primary_isbn13}
                        title={book.title}
                        author={book.author}
                        imageURL={book.book_image}
                    />
                ))
            )}
        </StyledRoot>
    )
}

export default BooksList
