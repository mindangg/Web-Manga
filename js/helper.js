function println(...args) {
    console.log(...args);
}

function formatDate(date) {
    const splitDate = date.split('-');
    const formattedDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    return formattedDate;
}