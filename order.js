const order = {
  orderItems: [
    {
      id: "M40",
      item: "T-shirt",
      price: 29.9,
      quantity: 5,
      gender: "m",
      category: "Summer",
    },
    {
      id: "M32",
      item: "Hoodie",
      price: 99.9,
      quantity: 2,
      gender: "m",
      category: "Winter",
    },
    {
      id: "M11",
      item: "Sandals",
      price: 19.9,
      quantity: 1,
      gender: "m",
      category: "Summer",
    },
    {
      id: "M12",
      item: "Shorts",
      price: 29.9,
      quantity: 1,
      gender: "m",
      category: "Summer",
    },
    {
      id: "M13",
      item: "Exercise Shorts",
      price: 29.9,
      quantity: 5,
      gender: "m",
      category: "Exercise",
    },
    {
      id: "M41",
      item: "Shoes",
      price: 19.9,
      quantity: 1,
      gender: "m",
      category: "Summer",
    },
    {
      id: "M49",
      item: "Socks",
      price: 5.9,
      quantity: 10,
      gender: "m",
      category: "Undergarment",
    },
    {
      id: "M01",
      item: "Belt",
      price: 15.9,
      quantity: 1,
      gender: "m",
      category: "Accessory",
    },
    {
      id: "M42",
      item: "Underwear",
      price: 19.9,
      quantity: 10,
      gender: "m",
      category: "Undergarment",
    },
    {
      id: "F71",
      item: "T-shirt",
      price: 39.9,
      quantity: 5,
      gender: "f",
      category: "Summer",
    },
    {
      id: "F81",
      item: "Dress",
      price: 49.9,
      quantity: 5,
      gender: "f",
      category: "Summer",
    },
    {
      id: "F91",
      item: "Skirt",
      price: 39.9,
      quantity: 5,
      gender: "f",
      category: "Summer",
    },
    {
      id: "F01",
      item: "Shoes",
      price: 19.9,
      quantity: 10,
      gender: "f",
      category: "Summer",
    },
    {
      id: "F32",
      item: "Hoodie",
      price: 99.9,
      quantity: 2,
      gender: "f",
      category: "Winter",
    },
    {
      id: "F34",
      item: "Sandals",
      price: 19.9,
      quantity: 2,
      gender: "f",
      category: "Summer",
    },
    {
      id: "F36",
      item: "Shorts",
      price: 39.9,
      quantity: 3,
      gender: "f",
      category: "Summer",
    },
    {
      id: "F12",
      item: "Exercise Shorts",
      price: 29.9,
      quantity: 5,
      gender: "f",
      category: "Exercise",
    },
    {
      id: "F19",
      item: "Sleeping",
      price: 39.9,
      quantity: 3,
      gender: "f",
      category: "Undergarment",
    },
    {
      id: "F42",
      item: "Socks",
      price: 5.9,
      quantity: 10,
      gender: "f",
      category: "Undergarment",
    },
    {
      id: "F43",
      item: "Underwear",
      price: 39.9,
      quantity: 10,
      gender: "f",
      category: "Undergarment",
    },
    {
      id: "F44",
      item: "Bra",
      price: 29.9,
      quantity: 10,
      gender: "f",
      category: "Undergarment",
    },
    {
      id: "F01",
      item: "Belt",
      price: 15.9,
      quantity: 1,
      gender: "f",
      category: "Accessory",
    },
  ],
};
////Define a function that returns the sum number of items in the order.///

function fivePointOne() {
  let result = 0;
  for (let index = 0; index <= order.orderItems.length; index++) {
    result = index;
  }
  console.log("result", result);
}

fivePointOne();

//Define a function that returns the total number of unique items in the order.

function uniqueOrder() {
  const unique = [...new Set(order.orderItems.map((item) => item.item))];
  console.log("unique", unique);
  let result = 0;
  for (let index = 0; index <= unique.length; index++) {
    result = index;
  }
  console.log("result", result);
}
uniqueOrder();

// const unique2 = order.orderItems
//   .map((item) => item.item)
//   .filter((value, index, self) => self.indexOf(value) === index);
// console.log("object", unique2);
