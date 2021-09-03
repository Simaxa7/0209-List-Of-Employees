import React, { useState } from 'react';
import { bonusCoefficient, calculateWorkExperience } from '../utils/utils';
import { userData } from '../data/data';

type EmployeesListItemsProps = {
    data: userData[];
    salaryChange: (
        id: string,
        value: number,
   ) => void;
};

const EmployeesListItems = ({
    data,
    salaryChange,
}: EmployeesListItemsProps) => {
    const [active, setActive] = useState(false);
    const [currentSalaryItem, setCurrentSalaryItem] = useState('');
    const handleInputChange = (id: string, value: string) => {
        salaryChange(
            id,
            Number(value),
        );
    };

    const handleCurrentSalaryClick = (id: string) => {
        if (id) {
            setCurrentSalaryItem(id);
            setActive(true);
        }
    };

    const handleSalaryEditClose = (e: any) => {
        e.stopPropagation();

        setActive(false);
        setCurrentSalaryItem('');
    };

    return (
        <tbody>
            {data.map((item: userData) => (
                <tr key={item.id}>
                    <td>
                        {`${item.lastName} ${item.firstName}`}
                    </td>
                    <td>
                        {item.dateOfHiring}
                    </td>
                    <td onClick={() => handleCurrentSalaryClick(item.id)}>
                        {(active && currentSalaryItem === item.id) ? (
                            <>
                                <input
                                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                                    type="text" value={item.salary}
                                />
                                <button onClick={(e) => handleSalaryEditClose(e)}>закрыть</button>
                            </>
                        ) : item.salary}
                    </td>
                    <td>
                        {`${item.salary + item.salary * bonusCoefficient(calculateWorkExperience(item.dateOfHiring))}`}
                    </td>
                </tr>
                )
            )}
        </tbody>
    );
};

export default EmployeesListItems;
