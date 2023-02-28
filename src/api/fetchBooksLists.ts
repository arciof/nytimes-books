const fetchBooksLists = async (): Promise<FetchBooksListsResponse> => {
    const response = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${
            import.meta.env.VITE_NYTIMES_API_KEY
        }`
    )

    return (await response.json()) as FetchBooksListsResponse
}

export default fetchBooksLists
