import React, { useState, useCallback } from 'react';
import { data as mockdata } from './data/data';
import {
    sortDataByDateOfHiring,
    sortDataByLastName,
    sortDataBySalary,
    sortDataBySalaryWithBonus,
} from './utils/utilsSort';
import EmployeesListHead from './components/EmployeesListHead';
import EmployeesListItems from './components/EmployeesListItems';

const App = () => {
    const [data, setData] = useState([...mockdata]);

    const handleSort = useCallback ((key) => {
        switch (key) {
            case 'lastName':
                setData(sortDataByLastName(data, key));
                break;
            case 'dateOfHiring':
                setData(sortDataByDateOfHiring(data));
                break;
            case 'salary':
                setData(sortDataBySalary(data));
                break;
            case 'salaryWithBonus':
                setData(sortDataBySalaryWithBonus(data));
                break;
            default:
                console.log('Новый тип')
        }

    },[data]);

    const handleChangeSalary = useCallback ((id: string, value: number) => {
        let newData = [...data];
        let [currentItem] = newData.filter((item)=> (item.id === id));

        if (currentItem) {
            currentItem.salary = value;

            setData(newData);
        }

    },[data]);

    return (
        <div className="app">
            <h1>react app</h1>
            <table className="table" cellSpacing="0" cellPadding='0'>
                <caption>Таблица сотрудников</caption>
                <EmployeesListHead handleSort={handleSort}/>
                <EmployeesListItems
                    data={data}
                    salaryChange={handleChangeSalary}
                />
            </table>
        </div>
    );
};

export default App;
