export const getTodayAndTomorrowDate = () => {
    const date = new Date();
    const today = date.getFullYear() + '-' + addLeadingZero(date.getMonth() +1) + '-' + addLeadingZero(date.getDate());
    date.setDate(date.getDate() + 1);
    const tomorrow = date.getFullYear() + '-' + addLeadingZero(date.getMonth() +1) + '-' + addLeadingZero(date.getDate());
    return [today, tomorrow];
}

const addLeadingZero = (number) => {
    return number < 10 ? '0' + number : number;
}

