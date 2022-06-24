"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDateLessThanToday = exports.getDateInSomeDays = void 0;
const getDateInSomeDays = (quantity) => {
    let date = new Date();
    date.setDate(date.getDate() + quantity);
    return date.toISOString().substring(0, 10);
};
exports.getDateInSomeDays = getDateInSomeDays;
const isDateLessThanToday = (date) => {
    return new Date(date).getTime() <= new Date().getTime() ? true : false;
};
exports.isDateLessThanToday = isDateLessThanToday;
//# sourceMappingURL=date.js.map