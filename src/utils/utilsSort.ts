import {
    bonusCoefficient,
    calculateWorkExperience,
    dateOfHiringPCtime,
} from './utils';
import {userData} from '../data/data';

let sortDataByDateOfHiringAZ: number = 1;
let sortDataByLastNameAZ: number = 1;
let sortDataBySalaryAZ: number = 1;
let sortDataBySalaryWithBonusAZ: number = 1;

export const sortDataByLastName = function(data: userData[], key: string) {
    const newData = [...data.sort((a, b) => a[key] > b[key] ? sortDataByLastNameAZ : -sortDataByLastNameAZ)];
    sortDataByLastNameAZ = (sortDataByLastNameAZ === 1) ? -1: 1;

    return newData
};

export const sortDataBySalary= function(data: userData[]) {
    const newData = [...data.sort((a, b) => a.salary > b.salary ? sortDataBySalaryAZ : -sortDataBySalaryAZ)];

    sortDataBySalaryAZ = (sortDataBySalaryAZ === 1) ? -1: 1;
    return newData
};

export const sortDataByDateOfHiring = function(data: userData[]) {
    const newData = [...data.sort((a, b) => dateOfHiringPCtime(a.dateOfHiring) > dateOfHiringPCtime(b.dateOfHiring) ? sortDataByDateOfHiringAZ : -sortDataByDateOfHiringAZ)];
    sortDataByDateOfHiringAZ = (sortDataByDateOfHiringAZ === 1) ? -1: 1;

    return newData
};

export const sortDataBySalaryWithBonus = function(data: userData[]) {
    const newData = [...data.sort((a, b) => {
        const calculatedValueA = a.salary + a.salary*bonusCoefficient(calculateWorkExperience(a.dateOfHiring));
        const calculatedValueB = b.salary + b.salary*bonusCoefficient(calculateWorkExperience(b.dateOfHiring));

        const result = calculatedValueA > calculatedValueB
            ? sortDataBySalaryWithBonusAZ
            : -sortDataBySalaryWithBonusAZ;
        
        return result
        })
    ];

    sortDataBySalaryWithBonusAZ = (sortDataBySalaryWithBonusAZ === 1) ? -1: 1;

    return newData;
};
