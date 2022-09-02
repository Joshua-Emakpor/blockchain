import React from 'react'

const SearchBox = ({search}) => {
     return (
          <div>
             <input type = 'search' placeholder = 'Search' 
               onChange = {search}
             />
          </div>
     )
}

export default SearchBox