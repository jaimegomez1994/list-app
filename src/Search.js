import React from "react";

function Search({search,handleSearch}) {
    return (
        <form>
            <label>
                Name:
                <input type="text" name="name" value={search} onChange={handleSearch} placeholder="Search people..." />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Search;
