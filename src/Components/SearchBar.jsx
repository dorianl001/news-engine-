import React from 'react';


function SearchBar() {
  
    return (
        <div>
            <h2>SearchBar</h2>
            <form className="form-horizontal">
                <input 
                    placeholder="Search" 
                    type="text" 
                    name="search" 
                    required
                    //onChange={handleChange}
                    //value={search}
                    />
                <button type="submit">Search</button>
            </form>
        </div>
    );
}

export default SearchBar;