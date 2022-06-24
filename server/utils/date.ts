export const getDateInSomeDays = (quantity: number): string => {
    let date = new Date();
    date.setDate(date.getDate() + quantity);

    return date.toISOString().substring(0, 10);
};

export const isDateLessThanToday = (date: string): boolean => {
    return new Date(date).getTime() <= new Date().getTime() ? true : false;
};
