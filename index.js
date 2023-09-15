/* <----------------- Default Parameters -------------------> */

const books = [];
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 15000 * numPassenger
) {
  const book = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(book);
  books.push(book);
};
createBooking("PIA", 4);
