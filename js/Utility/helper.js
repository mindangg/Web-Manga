// :D shorthand for console.log
function println(...args) {
    console.log(...args);
}

class Helper {
    static lowerStr(str) {
        return str.toLowerCase();
    }

    static clearForm(e) {
        const queryProductInput = e.querySelectorAll("input, select");
        queryProductInput.forEach((input) => {
            document.getElementById(input.id).value = "";
        });
    }
}

// format date dd/mm/yyyy
function formatDate(date) {
    const splitDate = date.split('-');
    const formattedDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
    return formattedDate;
}

// Bỏ dấu trong ký tự tiếng việt
function removeDiaritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

// Bỏ các ký tự đặc biệt 
function removeSpecialChar(str) {
    return str.replace(/[^a-zA-Z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim().toLowerCase();
}
