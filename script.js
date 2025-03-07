var isDate = function (input) {
  //   write your code here
	return !isNan(date.parse(input));
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
