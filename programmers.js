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

  document.getElementById("3.1").innerHTML = newProgrammers.join(", ");
}
threePointOne();

function threePointTwo() {
  function lastName(element) {
    return element.split(" ")[1];
  }

  // Produces new array.
  const newProgrammers = programmers.map(lastName);
  document.getElementById("3.2").innerHTML = newProgrammers.join(", ");
}

threePointTwo();

function threePointThree() {
  let sum = 0;
  function sumLengthFirstName(element) {
    return (sum += element.split(" ")[0].length);
  }
  const newProgrammers = programmers.map(sumLengthFirstName);

  document.getElementById("3.3").innerHTML = newProgrammers.join(", ");
}
threePointThree();

function threePointFour() {
  let sum = 0;
  function sumLengthLastName(element) {
    return (sum += element.split(" ")[1].length);
  }
  const newProgrammers = programmers.map(sumLengthLastName);

  document.getElementById("3.4").innerHTML = newProgrammers.join(", ");
}
threePointFour();

function threePointFive() {
  let sum = 0;
  function sumLengthFullName(element) {
    return (sum += element.length);
  }
  const newProgrammers = programmers.map(sumLengthFullName);

  document.getElementById("3.5").innerHTML = newProgrammers.join(", ");
}

threePointFive();

function threePointSix() {
  const newProgrammers = programmers.sort();

  document.getElementById("3.6").innerHTML = newProgrammers.join(", ");
}

threePointSix();

///Mutate programmers such that it's in alphabetical order of the last name of the programmers, A-Z.//
function sortLastName() {
  const newProgrammers = programmers.sort((a, b) => {
    a = a.split(" ")[1];
    b = b.split(" ")[1];
    if (a > b) return 1;
    if (a < b) return -1;
    if (a == b) return 0;
  });
  document.getElementById("3.7").innerHTML = newProgrammers.join(", ");
}

sortLastName();

function threePointEight() {
  const newProgrammers = programmers.sort((a, b) => {
    a.length - b.length;
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    if ((a.length = b.length)) return 0;
  });

  document.getElementById("3.8").innerHTML = newProgrammers.join(", ");
}
threePointEight();

function threePointTen() {
  const newProgrammers = programmers.filter((element) => element[0] === "L");
  document.getElementById("3.10").innerHTML = newProgrammers.join(", ");
}
threePointTen();

function threePointEleven() {
  function lastName(element) {
    return element.split(" ").slice(-1)[0];
  }

  // Produces new array.
  const newProgrammers = programmers.map(lastName);
  const result = newProgrammers.filter((name) => name[0] === "T");

  document.getElementById("3.11").innerHTML = result.join(", ");
}
threePointEleven();

function threePointTwelve() {
  function fullName(element) {
    return element.split(" ")[0].length < 4;
  }
  const newProgrammers = programmers.filter(fullName);

  document.getElementById("3.12").innerHTML = newProgrammers.join(", ");
}
threePointTwelve();

function threePointThrirteen() {
  const newProgrammers = programmers.filter(
    (element) => element.split(" ")[0].length > 4
  );
  document.getElementById("3.13").innerHTML = newProgrammers.join(", ");
}
threePointThrirteen();

function threePointFouthTeen() {
  let sum = 0;
  function fullName(element) {
    return (sum += element.length > 8);
  }
  const newProgrammers = programmers.filter(fullName);

  document.getElementById("3.14").innerHTML = newProgrammers.join(", ");
}
threePointFouthTeen();

function threePointFifTeen() {
  let sum = 0;
  function fullName(element) {
    return (sum += element.length < 8);
  }
  const newProgrammers = programmers.filter(fullName);

  document.getElementById("3.15").innerHTML = newProgrammers.join(", ");
}
threePointFifTeen();

function threePointSixTeen() {
  function fullName(element) {
    if (element.split(" ")[1][0] === "K" && element.split(" ")[1].endsWith("n"))
      return element;
  }
  const newProgrammers = programmers.filter(fullName);

  document.getElementById("3.16").innerHTML = newProgrammers.join(", ");
}
threePointSixTeen();

function threePointSevenTeen() {
  function fullName(element) {
    if (element.split(" ")[0].length === 3) return element;
  }
  const newProgrammers = programmers.filter(fullName);

  document.getElementById("3.17").innerHTML = newProgrammers.join(", ");
}
threePointSevenTeen();

function threePointEightTeen() {
  function fullName(element) {
    if (element[0] === "A") return element;
  }
  const newProgrammers = programmers.filter(fullName);

  document.getElementById("3.18").innerHTML = newProgrammers.join(", ");
}
threePointEightTeen();

function threePointEightTeen() {
  function fullName(element) {
    if (element[0] === "A") return element;
  }
  const newProgrammers = programmers.filter(fullName);

  document.getElementById("3.18").innerHTML = newProgrammers.join(", ");
}
threePointEightTeen();

function threePointNineTeen() {
  function fullName(element) {
    if (element[0] === "A" && element.split(" ")[1][0] === "A") return element;
  }
  const newProgrammers = programmers.filter(fullName);

  document.getElementById("3.19").innerHTML = newProgrammers.join(", ");
}
threePointNineTeen();

function threePoint20() {
  let obj = {};
  const newProgrammers = programmers.map((element) => {
    return `FullName: ${element}`;
  });

  console.log("betterProgrammers", { newProgrammers });
  document.getElementById("3.20").innerHTML = newProgrammers.join(", ");
}
threePoint20();
function threePoint21() {
  let obj = {};
  const newProgrammers = programmers.map((element) => {
    let split_names = element.trim().split(" ");
    if (split_names.length > 1) {
      return split_names[0] + " " + split_names[1][0] + ".";
    }
    return split_names[0];
  });

  console.log("betterProgrammers222", { newProgrammers });
  document.getElementById("3.21").innerHTML = newProgrammers.join(", ");
}
threePoint21();

///Reduce the programmers to stew which is a string of all first names combined. ("Dennis, Brian, Ken, ...")//

function reduce01() {
  let stew = programmers.reduce(
    (sum, current) => (sum += current.substring(0, current.indexOf(" ")) + " "),
    ""
  );
  console.log("stew", stew);
}

reduce01();

function reduce02() {
  let result = programmers.reduce(
    (sum, current) => (sum += current.split(" ")[0].length),
    0
  );
  console.log("stewww2", result);
}
reduce02();

function reduce03() {
  let result = programmers.reduce((sum, current) => (sum += current.length), 0);
  console.log("stewww3", result);
}
reduce03();

function reduce04() {
  const newProgrammers = programmers.filter((element) => element[0] === "L");
  console.log("object", newProgrammers);
  let stew = newProgrammers.reduce(
    (sum, current) => (sum += current.split(" ")[0].length),
    0
  );
  console.log("stewww4", stew);
}
reduce04();
