// isInHoursRange(
//   [
//     new Date(2020, 05, 07, 8, 3, 3),
//     new Date(2020, 08, 09, 15, 3, 3)
//   ],
//     new Date(2020, 05, 07, 9, 3, 3)
// )

const isInHoursRange = ([from, to], date = new Date()) => {
  const todayDate = new Date().getDate();

  from.setDate(todayDate);
  to.setDate(todayDate);
  date.setDate(todayDate);

  return from < date && to > date;
};

export default isInHoursRange;