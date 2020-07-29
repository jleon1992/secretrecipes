import React from 'react'

export const SearchBar = props => {
    const {changeSearch, searchValue} = props
    return (
        <div>
            <input
            type='text'
            value={searchValue}
            name='search'
            onChange={changeSearch}
            placeholder='search recipes'
            />
        </div>
    )
}

export default SearchBar