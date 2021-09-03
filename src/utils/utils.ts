export const dateOfHiringPCtime = (userData: string) => {
    const stringDate: string[] = userData.split('.');
    const numberDate: number[] = stringDate.map( (el, i) => {
        if (i === 1){
            return Number(el)-1;
        }

        return Number(el)
    });
    const [d, m, y] = numberDate;
    const dateOfHiring = new Date(y,m,d);

    return dateOfHiring.getTime();
};

export const calculateWorkExperience = (userData: string) => {
    const stringDate: string[] = userData.split('.');
    const numberDate: number[] = stringDate.map( (el, i) => {
        if (i === 1){
            return Number(el)-1;
        }

        return Number(el)
    });
    const [d, m, y] = numberDate;
    const dateCurrent = new Date();
    const dateOfHiring = new Date(y,m,d);
    const diffYears =  dateCurrent.getFullYear() - dateOfHiring.getFullYear();
    const diffMonths = dateCurrent.getMonth() - dateOfHiring.getMonth();
    const diffDays = dateCurrent.getDate() - dateOfHiring.getDate();
    let resultMonth;

    (diffDays < 0 ) ? resultMonth = -1 : resultMonth = 0;
    resultMonth += diffYears*12 + diffMonths;

    return resultMonth;
};

export const bonusCoefficient = (fullMonthExpirience: number) => {
    let coefficient = 0;

    if (fullMonthExpirience >= 60) {
        coefficient = 1;
    } else if (fullMonthExpirience >= 12) {
        coefficient = 0.5;
    }

    return coefficient
};
