const programmers = [
  "Dennis Ritchie",
  "Brian Kernighan",
  "Ken Thompson",
  "Linus Torvalds",
  "Bjarne Stroustrup",
  "Tim Berners-Lee",
  "Donald Knuth",
  "Alan Turing",
  "Mark Zuckerberg",
  "Bill Gates",
  "Larry Page",
  "Elon Musk",
  "Jack Dorsey",
  "Satoshi Nakamoto",
  "Ada Lovelace",
  "Grace Hopper",
  "Dan Ambramov",
  "Jordan Walke",
  "Ryan Dahl",
  "David Heinemeier Hansson",
  "Guido van Rossum",
  "Yukihiro Matsumoto",
  "Sergey Brin",
  "Lyndsey Scott",
  "Abhinav Asthana",
  "Abhijit Kane",
  "Ankit Sobti",
  "Loi Tran",
  "Charles Lee",
  "Tuan Nguyen",
  "Tan Vo",
];
function threePointOne() {
  // 3.1
  function printFirstName(element) {
    console.log("printFirstName", element);
    return element.split(" ")[0];
  }
  // /Produces new array by using for loop//

  // for (let index = 0; index < programmers.length; index++) {
  //   const element = programmers[index];
  //   return element.split(" ")[0];
  // }

  // Produces new array by using map//
  const newProgrammers = programmers.map(printFirstName);

  document.getElementById("3.1").innerHTML = newProgrammers.join(" ");
}
threePointOne();

function threePointTwo() {
  function lastName(element) {
    return element.split(" ")[1];
  }

  // Produces new array.
  const newProgrammers = programmers.map(lastName);
  document.getElementById("3.2").innerHTML = newProgrammers.join(" ");
}

threePointTwo();

function threePointThree() {
  let sum = 0;
  function sumLengthFirstName(element) {
    return (sum += element.split(" ")[0].length);
  }
  const newProgrammers = programmers.map(sumLengthFirstName);

  document.getElementById("3.3").innerHTML = newProgrammers.join(" ");
}
threePointThree();

function threePointFour() {
  let sum = 0;
  function sumLengthLastName(element) {
    return (sum += element.split(" ")[1].length);
  }
  const newProgrammers = programmers.map(sumLengthLastName);

  document.getElementById("3.4").innerHTML = newProgrammers.join(" ");
}
threePointFour();

function threePointFive() {
  let sum = 0;
  function sumLengthFullName(element) {
    return (sum += element.length);
  }
  const newProgrammers = programmers.map(sumLengthFullName);

  document.getElementById("3.5").innerHTML = newProgrammers.join(" ");
}

threePointFive();

function threePointSix() {
  const newProgrammers = programmers.sort();

  document.getElementById("3.6").innerHTML = newProgrammers.join(" ");
}

threePointSix();

function threePointSeven() {
  const newProgrammers = programmers.sort();

  document.getElementById("3.7").innerHTML = newProgrammers.join(" ");
}

threePointSeven();

function threePointEight() {
  const newProgrammers = programmers.sort((a, b) => {
    a.lenght - b.lenght;
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    if ((a.length = b.length)) return 0;
  });

  document.getElementById("3.8").innerHTML = newProgrammers.join(" ");
}
threePointEight();

function threePointTen() {
  const newProgrammers = programmers.filter((element) => element[0] === "L");
  document.getElementById("3.10").innerHTML = newProgrammers.join(" ");
}
threePointTen();
