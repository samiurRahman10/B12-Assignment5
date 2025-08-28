const historyArray = [];
// Function For Get Number
function getTextNumber(id) {
    return parseInt(document.getElementById(id).innerText);
}
// Function For set Number
function setNumber(value, id) {
    document.getElementById(id).innerText = value;
}
// Function For Set Coin Number
function setCoinNumber() {
    const coinNumber = getTextNumber('coin-text') - 20;;
    setNumber(coinNumber, 'coin-text');
}
// Function For add History
function historyFunction(histories) {
    const parent = document.getElementById('history-container');
    parent.innerText = '';
    for (const history of histories) {
        const div = document.createElement('div');
        div.innerHTML = `<div class="flex justify-between items-center mt-3 bg-gray-50 p-4 rounded-md">
                    <div>
                        <h1 class="font-semibold text-[15px]">${history.name}</h1>
                        <p class="text-gray-500">${history.number}</p>
                    </div>
                    <div>${history.time}</div>
                 </div>`
        parent.appendChild(div);
    }
}
// For Setting Love Count
const allHeartClass = document.querySelectorAll('.heart');
for (const heart of allHeartClass) {
    heart.addEventListener('click', function () {
        const loveValue = getTextNumber('love-text') + 1;
        setNumber(loveValue, 'love-text');
    })
}
// History clear Button 
document.getElementById('history-clear-btn').addEventListener('click', function () {
    document.getElementById('history-container').innerText='';
})
// Call Button Functionalities for National Emergency Service
document.getElementById('call-btn-national-emergency').addEventListener('click', function () {
    if (getTextNumber('coin-text') > 0) {
        alert('📞 Calling National Emergency 999');
        setCoinNumber();
        const history = {
            name: 'National Emergency Number',
            number: 999,
            time: new Date().toLocaleTimeString()
        }
        historyArray.push(history);
        historyFunction(historyArray);
    }
    else {
        alert("Insufficient Coin.You can't make a call")
    }
})
// Call Button Functionalities for Police Helpline Number
document.getElementById('call-btn-police').addEventListener('click', function () {
    if (getTextNumber('coin-text') > 0) {
        alert('📞 Calling Police Helpline Number  999');
        setCoinNumber();
        const history = {
            name: 'Police Helpline Number',
            number: 999,
            time: new Date().toLocaleTimeString()
        }
        historyArray.push(history);
        historyFunction(historyArray);
    }
    else {
        alert("Insufficient Coin.You can't make a call")
    }
})
// Call Button Functionalities for Police Helpline Number
document.getElementById('call-btn-fire').addEventListener('click', function () {
    if (getTextNumber('coin-text') > 0) {
        alert('📞 Fire Service Number 999');
        setCoinNumber();
        const history = {
            name: 'Fire Service Number',
            number: 999,
            time: new Date().toLocaleTimeString()
        }
        historyArray.push(history);
        historyFunction(historyArray);
    }
    else {
        alert("Insufficient Coin.You can't make a call")
    }
})
// Call Button Functionalities for Ambulance Service
document.getElementById('call-btn-ambulance').addEventListener('click', function () {
    if (getTextNumber('coin-text') > 0) {
        alert('📞 Ambulance Service 1994-999999');
        setCoinNumber();
        const history = {
            name: 'Ambulance Service',
            number: '1994-999999',
            time: new Date().toLocaleTimeString()
        }
        historyArray.push(history);
        historyFunction(historyArray);
    }
    else {
        alert("Insufficient Coin.You can't make a call")
    }
})
// Call Button Functionalities for Brac Service
document.getElementById('call-btn-brac').addEventListener('click', function () {
    if (getTextNumber('coin-text') > 0) {
        alert('📞 Brac Helpline 16445');
        setCoinNumber();
        const history = {
            name: 'Brac Service',
            number: '16445',
            time: new Date().toLocaleTimeString()
        }
        historyArray.push(history);
        historyFunction(historyArray);
    }
    else {
        alert("Insufficient Coin.You can't make a call")
    }
})
// Call Button Functionalities for Railway Service
document.getElementById('call-btn-railway').addEventListener('click', function () {
    if (getTextNumber('coin-text') > 0) {
        alert('📞 Bangladesh Railway Helpline 163');
        setCoinNumber();
        const history = {
            name: 'Bangladesh Railway Helpline',
            number: '163',
            time: new Date().toLocaleTimeString()
        }
        historyArray.push(history);
        historyFunction(historyArray);
    }
    else {
        alert("Insufficient Coin.You can't make a call")
    }
})