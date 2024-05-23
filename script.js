const returnDate = document.getElementById("returnDate");

function clickScroll() {
  const e = document.querySelector(".emily");
  e.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


function daysIntoYear(date){
    return ((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000) - 1;
}

function enumerate(num){
    if (num % 10 == 1) {
        return `${num}st`;
    } else if (num % 10 == 2) {
        return `${num}nd`;
    } else if (num % 10 == 3) {
        return `${num}rd`;
    } else {
        return `${num}th`;
    }
}

var months = [
    "Earth",
    "Harvest",
    "Nets",
    "Rain",
    "Wind",
    "Darkness",
    "High Cold",
    "Ice",
    "Hearths",
    "Seeds",
    "Timber",
    "Clans",
    "Songs"
];

function getConvertedDate(d){
    var today = daysIntoYear(d);
    var feast = 196;
    var lastDay = 364;
    var shiftedDay = -1;

    var isLeapYear = new Date(d.getFullYear(), 1, 29).getMonth() == 1;
    if (isLeapYear) {
        if (today < feast) {
            shiftedDay =  today + (lastDay - feast);
        } else if (today == feast) {
            return "1st Day,<br>Fugue Feast";
        } else if (today == feast + 1){
            return "2nd Day,<br>Fugue Feast";
        } else if (today > feast + 1) {
            shiftedDay = today - feast - 2;
        }

        return `${enumerate(shiftedDay % 28 + 1)} Day,<br>The Month of ${months[Math.floor(shiftedDay/28)]}`;
    } else {
        if (today < feast) {
            shiftedDay = today + (lastDay - feast);
        } else if (today == feast) {
            return "Fugue Feast";
        } else if (today > feast) {
            shiftedDay = today - feast - 1;
        }

        return `${enumerate(shiftedDay % 28 + 1)} Day,<br>The Month of ${months[Math.floor(shiftedDay/28)]}`;
    }
}