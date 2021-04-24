import React from "react";

function List({listFiltered}) {
    return (
        <ul>
            {listFiltered.map((list) => <li>{list.name}</li>)}
        </ul>
    );
}

export default List;
