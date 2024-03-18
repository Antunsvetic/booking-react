import moment from "moment";

export function formatDateToString(date) {
    return moment(date, "MM/DD/YYY").format("DD/MM/YYYY")
}

export function formatDateToMomentObject(date) {
    return moment(date, "MM/DD/YYY");
}