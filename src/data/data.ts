export const data = [
    {
        lastName: 'Ivanov',
        firstName: 'Ivan',
        dateOfHiring: '01.01.2001',
        salary: 100500,
        id:'2341213123'
    },
    {
        lastName: 'Petrov',
        firstName: 'Petr',
        dateOfHiring: '11.07.2020',
        salary: 100500,
        id:'2315213123'
    },
    {
        lastName: 'Sidorov',
        firstName: 'Sidr',
        dateOfHiring: '01.02.2021',
        salary: 100500,
        id:'2341213493'
    },
    {
        lastName: 'Archip',
        firstName: 'Boris',
        dateOfHiring: '22.01.2019',
        salary: 100501,
        id:'1341213493'
    },
    {
        lastName: 'Pirozhkov',
        firstName: 'Artur',
        dateOfHiring: '01.02.2011',
        salary: 100000,
        id:'4341213493'
    }
];

export const dataHeaders = {
    lastName: "ФИО",
    dateOfHiring:"Дата трудоустройства",
    salary: 'Оклад',
    salaryWithBonus: "Заработная плата"
};

export interface userData {
    lastName: string;
    firstName: string;
    dateOfHiring: string;
    salary: number;
    id: string;
}
