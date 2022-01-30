import isThisWeek from 'date-fns/isThisWeek';
import isToday from 'date-fns/isToday';
import isThisMonth from 'date-fns/isThisMonth';
import {
  addMonths,
  intervalToDuration,
  isWithinInterval,
  parseISO,
  startOfMonth,
  format,
} from 'date-fns';

function localStorageLookup(project, date) {
  let arrayOfKeys = [];
  for (let i = 0; i < localStorage.length; i++) {
    let item = JSON.parse(localStorage.getItem(localStorage.key(i)))[1];
    let dateItem = JSON.parse(localStorage.getItem(localStorage.key(i)))[0];
    if (item === project || date === dateItem) {
      arrayOfKeys.push({
        taskName: localStorage.key(i),
        date: JSON.parse(localStorage.getItem(localStorage.key(i)))[0],
      });
    }
  }
  return arrayOfKeys;
}

function localStorageLookupWeek() {
  let arrayOfKeys = [];
  for (let i = 0; i < localStorage.length; i++) {
    let dateItem = JSON.parse(localStorage.getItem(localStorage.key(i)))[0];
    if (isThisWeek(parseISO(dateItem)) && !isToday(parseISO(dateItem))) {
      arrayOfKeys.push({
        taskName: localStorage.key(i),
        date: JSON.parse(localStorage.getItem(localStorage.key(i)))[0],
      });
    }
  }
  return arrayOfKeys;
}

function localStorageLookupMonth() {
  let arrayOfKeys = [];
  let today = format(new Date(), 'yyyy-MM-dd');
  let nextMonth = addMonths(parseISO(today), 1);
  for (let i = 0; i < localStorage.length; i++) {
    let dateItem = JSON.parse(localStorage.getItem(localStorage.key(i)))[0];
    let isThisMonth = false;
    let parsedDate = parseISO(dateItem);
    try {
      isWithinInterval(parsedDate, {
        start: parsedDate,
        end: nextMonth,
      });
      isThisMonth = true;
    } catch (error) {
      isThisMonth = false;
    }

    if (isThisMonth && !isToday(parsedDate) && !isThisWeek(parsedDate)) {
      arrayOfKeys.push({
        taskName: localStorage.key(i),
        date: JSON.parse(localStorage.getItem(localStorage.key(i)))[0],
      });
    }
  }
  return arrayOfKeys;
}

export { localStorageLookup, localStorageLookupWeek, localStorageLookupMonth };
