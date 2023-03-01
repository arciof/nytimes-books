import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import fetchBooksLists from '../../api/fetchBooksLists'
import Book from '../../components/Book/Book'
import BooksList from '../../components/BooksList/BooksList'

const StyledRoot = styled.div(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
}))

const BooksLists = () => {
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
            {booksLists.map((list: BooksList) => (
                <BooksList key={list.list_name} name={list.list_name}>
                    {list.books.map((book: Book) => (
                        <Book key={book.primary_isbn13} book={book} />
                    ))}
                </BooksList>
            ))}
        </StyledRoot>
    )
}

export default BooksLists
