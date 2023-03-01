import { createContext, Dispatch, SetStateAction, useState } from 'react'

interface FilterContext {
    searchFilter: string
    setSearchFilter: Dispatch<SetStateAction<string>>
}

export const FilterContext = createContext<FilterContext>({} as FilterContext)

const FilterContextProvider = ({ children }: { children: any }) => {
    const [searchFilter, setSearchFilter] = useState<string>('')

    return (
        <FilterContext.Provider value={{ searchFilter, setSearchFilter }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider
