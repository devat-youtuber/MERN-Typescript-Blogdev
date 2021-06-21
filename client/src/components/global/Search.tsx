import React, { useState } from 'react'

const Search = () => {
  const [search, setSearch] = useState('')


  return (
    <div className="search w-100 position-relative me-4">
      <input type="text" className="form-control me-2 w-100"
      value={search} placeholder="Enter your search..."
      onChange={e => setSearch(e.target.value)}  />
    </div>
  )
}

export default Search
