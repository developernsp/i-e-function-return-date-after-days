const addDays = require("date-fns/addDays");

function date(days) {
  const newDate = addDays(new Date(2020, 8, 22), days);

  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
}

module.exports = date;
