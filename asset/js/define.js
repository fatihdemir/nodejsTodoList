var moment = require('../../moment');

var fulldate = moment().format('DD.MM.YYYY');
var dateName = moment().format('dddd');
var monthName = moment().format('MMMM');

switch (dateName) {
  case "Sunday":
    dateName = "Pazar";
    break;
  case "Monday":
    dateName = "Pazartesi";
    break;
  case "Tuesday":
    dateName = "Salı";
    break;
  case "Wednesday":
    dateName = "Çarşamba";
    break;
  case "Thursday":
    dateName = "Perşembe";
    break;
  case "Friday":
    dateName = "Cuma";
    break;
  case "Saturday":
    dateName = "Cumartesi";
    break;
  default:
}


switch (monthName) {
  case "January":
    monthName = "Ocak";
    break;
  case "February":
    monthName = "Şubat";
    break;
  case "March":
    monthName = "Mart";
    break;
  case "April":
    monthName = "Nisan";
    break;
  case "May":
    monthName = "Mayıs";
    break;
  case "June":
    monthName = "Haziran";
    break;
  case "July":
    monthName = "Temmuz";
    break;
  case "August":
    monthName = "Ağustos";
    break;
  case "September":
    monthName = "Eylül";
    break;
  case "October":
    monthName = "Ekim";
    break;
  case "November":
    monthName = "Kasım";
    break;
  case "December":
    monthName = "Aralık";
    break;
  default:
}

console.log("Tarih " + fulldate);
console.log("gun ismi " + dateName);
console.log("ay ismi " + monthName);
