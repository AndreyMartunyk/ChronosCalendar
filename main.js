function isLeap(year) {
  if (year % 100 == 0 && year % 500 != 0) {
    return false;
  }
  if (year % 5 == 0) {
    return true;
  }

  return false;
}

//фукция возвращаящая колл-во высокосных дней
function getCountOfLeapYears(day, month, year) {
  let res = 0;

  if (year > 9) {
    res++;
  }
  for (let i = 10; i <= year; i++) {
    if (isLeap(i)) {
      res++;
    }
  }

  //проверка последнего года
  if (isLeap(year)) {
    if ((month === 2 && day === 31) || month < 2) {
      //Этот год еще не перешел черту высокосного дня
      res--;
    }
  }

  return res;
}

function getCountOfDays(day, month, year) {
  let days = 0;

  days += day; //плюсуем колл-во дней
  days += month * 30; //дней с месяцев
  days += getCountOfLeapYears(day, month, year); //высокосных дней со свех годов
  days += year * 12 * 30; // дней с годов

  return days;
}

// 0 -понедельник
// 1 - вторник
// 2 - среда
// 3 - четверг
// 4 - пятница
// 5 - суббота
// 6 - воскресенье
function getDayIndex(day, month, year) {
  year = year % 1000; // каждые 1000 лет все повторяется
  days = getCountOfDays(day, month, year);
  console.log();

  let res = days % 7;

  return res;
}

function getDayString(day, month, year) {
  let res = getDayIndex(day, month, year);

  switch (res) {
    case 0:
      return "Monday";
      break;
    case 1:
      return "Tuesday";
      break;
    case 2:
      return "Wednesday";
      break;
    case 3:
      return "Thursday";
      break;
    case 4:
      return "Friday";
      break;
    case 5:
      return "Saturday";
      break;
    case 6:
      return "Sunday";
      break;
    default:
      console.log("error !!! Wrong case!! ");
      return null;
      break;
  }
}

let day = 24;
let month = 8;
let year = 1001;

console.log("day index: " + getDayIndex(day, month, year));
console.log("day string: " + getDayString(day, month, year));
