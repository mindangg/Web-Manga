const statisticPage = document.getElementById('statistic-page')
const tableHeader = statisticPage.querySelector('.table__head')
const tableBodyContent = statisticPage.querySelector('.table__body-content')
const tableFooter = statisticPage.querySelector('.table__footer')

const handleStatisticSelection = () => {
    const dateStartInput = document.getElementById('statistic__date-start')
    const dateEndInput = document.getElementById('statistic__date-end')
    const selectInput = document.getElementById('statistic-selection')
    let dateStart = dateStartInput.value
    let dateEnd = dateEndInput.value
    let type = selectInput.value
    if (dateStart > dateEnd) {
        alert('End date must be after start date')
        dateStartInput.value = '';
        dateEndInput.value = '';
        return
    }
    dateStart = (dateStart === '')? new Date(0) : new Date(dateStart)
    dateEnd = (dateEnd === '')? new Date() : new Date(dateEnd)

    switch (type){
        case 'user': handleStatisticUser(dateStart, dateEnd); break;
        case 'product': handleStatisticProduct(dateStart, dateEnd); break;
    }
}

const handleStatisticUser = (dateStart, dateEnd) => {

    let users = JSON.parse(localStorage.getItem('users'));
    let orders = JSON.parse(localStorage.getItem('order'))
    let validOrders = orders.filter(order => {
        let parts = order.orderDate.split('/')
        let date = new Date(parts[2], parts[1] - 1, parts[0])
        return order.orderStatus !== 'Cancelled' && date >= dateStart && date < dateEnd
    })

    let valueArray = [];
    for (let i = 1; i < users.length; i++){
        let user = users[i]
        let index = parseInt(user.userId.split('_')[1])
        let obj = {
            user: user,
            value: 0.0
        }
        valueArray.push(obj)
        for (let j = 0; j < validOrders.length; j++){
            let order = validOrders[j]
            if(user.userId === order.userId){
                valueArray[index - 1].value += parseFloat(order.orderPrice)
            }
        }
    }
    valueArray.sort((a, b) => {
        return b.value - a.value
    })
    console.log(valueArray)
    renderStatisticUser(valueArray)
}

let statisticUserPageIndex = 1;
const statisticUserPerPage = 5;

const renderStatisticUser = (array) => {
    tableHeader.innerHTML = ''
    tableBodyContent.innerHTML = ''
    tableFooter.innerHTML = ''
    let totalPage = Math.ceil(array.length / statisticUserPerPage)

    if (totalPage >= 1) {
        tableFooter.innerHTML = `
            <button class="button button__user__prev-pagi" 
                id="button__user__prev-pagi"> << 
            </button>
            <input type="text" class="input input__pagi" id="input-user__pagi" style="width: 3%; border: none" disabled> / ${totalPage}
            <button class="button button__user__next-pagi" 
                id="button__user__next-pagi"> >> 
            </button>
        `
        const inputPagi = document.getElementById("input-user__pagi");
        inputPagi.value = statisticUserPageIndex;

        document.getElementById("button__user__prev-pagi")
            .addEventListener("click", () => {
                console.log("Go to previous page");
                if (statisticUserPageIndex > 1) {
                    statisticUserPageIndex--;
                    inputPagi.value = statisticUserPageIndex;
                    renderStatisticUserArray(array);
                } else {
                    console.error("Error");
                }
            });

        document.getElementById("button__user__next-pagi")
            .addEventListener("click", () => {
                console.log("Go to next page");
                if (statisticUserPageIndex < totalPage) {
                    statisticUserPageIndex++;
                    inputPagi.value = statisticUserPageIndex;
                    renderStatisticUserArray(array);
                } else {
                    console.error("Error");
                }
            });
    }

    tableHeader.innerHTML = `
            <tr class="user table__row">
                <th class="user table__cell user-table__cell userId">
                    UserId
                </th>
                <th class="user table__cell user-table__cell fullName">
                    Full name
                </th>
                <th class="user table__cell user-table__cell username">
                    Username
                </th>
                <th class="user table__cell user-table__cell password">
                    Password
                </th>
                <th class="user table__cell user-table__cell email">
                    Email
                </th>
                <th class="user table__cell user-table__cell phoneNumber">
                    Phone number
                </th>
                <th class="user table__cell user-table__cell createDate">
                    Date create
                </th>
                <th class="user table__cell user-table__cell address">
                    Address
                </th>
                <th class="user table__cell user-table__cell total">
                    Total
                </th>
            </tr>
    `
    renderStatisticUserArray(array)
}

const renderStatisticUserArray = (list) => {
    let start = (statisticUserPageIndex - 1) * statisticUserPerPage;
    let end = start + statisticUserPerPage;
    let array = list.slice(start, end);
    tableBodyContent.innerHTML = ``
    array.map(obj => {
        let row = document.createElement('tr');
        row.className = 'user table__row'
        row.id = `${obj.user.userId}`
        row.innerHTML += `
        <td class="user table__cell user-table__cell userId">
            ${obj.user.userId}
        </td>
        <td class="user table__cell user-table__cell fullName">
            ${obj.user.fullName}
        </td>
        <td class="user table__cell user-table__cell username">
            ${obj.user.username}
        </td>
        <td class="user table__cell user-table__cell password">
            ${obj.user.password}
        </td>
        <td class="user table__cell user-table__cell email">
            ${obj.user.email}
        </td>
        <td class="user table__cell user-table__cell phoneNumber">
            ${obj.user.phoneNumber}
        </td>
        <td class="user table__cell user-table__cell createDate"> 
            ${obj.user.createDate}
        </td>
        <td class="user table__cell user-table__cell address">
            ${obj.user.address.houseNumber} ${obj.user.address.street}, ${obj.user.address.ward}, ${obj.user.address.district}, ${obj.user.address.city}
        </td>
        <td class="user table__cell user-table__cell total">
            ${obj.value}
        </td>
        `
        tableBodyContent.append(row);
    })
}

const handleStatisticProduct = (dateStart, dateEnd) => {
}


const renderStatisticProduct = (array) => {

}
