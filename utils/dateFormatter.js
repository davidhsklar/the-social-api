module.exports = (date) => {
  let month = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const monthName = month[newDate.getMonth()];
  const day = newDate.getDate();
  let hour = newDate.getHours();
  const minutes = newDate.getMinutes();
  let timeOfDay = "";

  if (hour > 12) {
    hour = hour - 12;
    timeOfDay = "pm";
  } else {
    timeOfDay = "am";
  }

  if (hour == 24) {
    hour = 12;
    timeOfDay = "am";
  }

  const formattedDate = `${hour}:${minutes}${timeOfDay} - ${monthName} ${day}, ${year}`;
  return formattedDate;
};
