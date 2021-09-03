import React from "react";
import {dataHeaders} from "../data/data"

const EmployeesListHead = ({handleSort}: {handleSort: any}) => {
    return (
        <thead>
        <tr>
            {Object.keys(dataHeaders).map( (item) => (
                <th onClick={() => handleSort(item)} key={item}>{dataHeaders[item]}  &#8593;&#8595;</th>
            ))}
        </tr>
        </thead>
    )
};

export default EmployeesListHead;