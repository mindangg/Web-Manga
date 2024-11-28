const statisticPage = document.getElementById('statistic-page')
const tableHeader = statisticPage.querySelector('.table__header')
const tableBodyContent = statisticPage.querySelector('.table__body-content')
const tableFooter = statisticPage.querySelector('.table__footer')

const handleStatisticSelection = (value) => {
    const dateStartInput = document.getElementById('statistic__date-start')
    const dateEndInput = document.getElementById('statistic__date-end')
    let dateStart = dateStartInput.value
    let dateEnd = dateEndInput.value
    if (dateStart > dateEnd) {
        alert('End date must be after start date')
        dateStartInput.value = '';
        dateEndInput.value = '';
        return
    }
    switch (value){
        case 'user': renderStatisticUser(dateStart, dateEnd); break;
        case 'product': renderStatisticProduct(dateStart, dateEnd); break;
    }
}

const renderStatisticUser = (dateStart, dateEnd) => {
    let users = JSON.parse(localStorage.getItem('users'));
    let orders = JSON.parse(localStorage.getItem('order'))
}

const renderStatisticProduct = (dateStart, dateEnd) => {
    console.log(dateStart, dateEnd)
}