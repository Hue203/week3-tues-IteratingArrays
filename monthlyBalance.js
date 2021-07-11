const user = {
  currency: "USD",
  currentBalance: 5000,
  transactionsMonthToDate: [{}],
};

// assuming
user.transactionsMonthToDate = [
  {
    amount: 3000,
    type: "deposit",
    category: "Salary - Full Time",
  },
  { category: "Dining", amount: 50, type: "withdrawal" },
  { category: "Dining", amount: 100, type: "withdrawal" },
  { category: "Rent", amount: 2000, type: "withdrawal" },
  { category: "Groceries", amount: 250, type: "withdrawal" },
  {
    amount: 250,
    type: "withdrawal",
    category: "Transportation",
  },
  {
    amount: 250,
    type: "withdrawal",
    category: "Health",
  },
  {
    amount: 50,
    currency: "USD",
    type: "withdrawal",
    category: "Travel - Fuel",
  },
  { category: "Living", amount: 650, type: "withdrawal" },
  { category: "Groceries", amount: 500, type: "withdrawal" },
  { category: "Living", amount: 250, type: "withdrawal" },
  { category: "Living", amount: 250, type: "withdrawal" },
  {
    amount: 5000,
    type: "deposit",
    category: "Salary - Part Time",
  },
  { category: "Groceries", amount: 450, type: "withdrawal" },
  {
    amount: 58,
    type: "withdrawal",
    category: "Transportation",
  },
  {
    amount: 50,
    type: "withdrawal",
    category: "Health",
  },
  {
    amount: 100,
    type: "withdrawal",
    category: "Transportation",
  },
  {
    amount: 150,
    type: "withdrawal",
    category: "Transportation",
  },
  { category: "Groceries", amount: 100, type: "withdrawal" },
  {
    amount: 100,
    type: "withdrawal",
    category: "Entertainment",
  },
  {
    amount: 500,
    type: "withdrawal",
    category: "Entertainment",
  },
  { category: "Groceries", amount: 300, type: "withdrawal" },
  {
    amount: 500,
    type: "withdrawal",
    category: "Travel - Airline",
  },
  {
    amount: 1500,
    type: "withdrawal",
    category: "Travel - Hotel",
  },
  {
    amount: 50,
    type: "withdrawal",
    category: "Travel - Fuel",
  },
  { category: "Groceries", amount: 200, type: "withdrawal" },
  {
    amount: 500,
    type: "deposit",
    category: "Portfolio Dividends",
  },
  {
    amount: 100,
    type: "withdrawal",
    category: "Entertainment",
  },
  {
    amount: 100,
    type: "withdrawal",
    category: "Travel - Fuel",
  },
  { category: "Groceries", amount: 200, type: "withdrawal" },
  {
    amount: 100,
    type: "withdrawal",
    category: "Entertainment",
  },
  {
    amount: 100,
    type: "withdrawal",
    category: "Health",
  },
];
const usdToVND = 23000;

function transactionHistory() {
  let result = `Balance: $${user.currentBalance} \n Transaction History: \n`;
  user.transactionsMonthToDate.forEach((item) => {
    if (item.type === "withdrawal") {
      result += `- You withdrew $${
        item.amount
      }. The new balance is $${`${(user.currentBalance -= item.amount)}`} . \n`;
    }
    if (item.type === "deposit") {
      result += `- You deposited $${
        item.amount
      }.The new balance is $${`${(user.currentBalance += item.amount)}`} . \n`;
    }
  });
  console.log("transactionHistory", result);
}

///Define a function that returns the total number of deposits.//
function countDeposit() {
  let result = 0;
  user.transactionsMonthToDate.forEach((item) => {
    console.log(item.type);
    if (item.type == "deposit") {
      result += 1;
    } else {
      result += 0;
    }
  });
  console.log(result);
}

// const countingSources = (newsList) => {
//   const sourceCounter = {};

//   newsList.forEach((item) => {
//     console.log(item.source.name);
//     if (!(item.source.name in sourceCounter)) {
//       sourceCounter[item.source.name] = 1;
//     } else {
//       sourceCounter[item.source.name] += 1;
//     }
//     console.log("sourceCounter", sourceCounter);
//   });
//   return sourceCounter;
// };

//Define a function that returns the sum of deposits.//
function deposit() {
  let totalDeposit = user.transactionsMonthToDate.reduce(
    (total, currentDeposit) => {
      let totalDept = 0;
      if (currentDeposit.type == "deposit") {
        totalDept = currentDeposit.amount;
      } else {
        currentDeposit.amount = 0;
      }
      return total + currentDeposit.amount;
    },
    0
  );
  console.log("totalDeposit", totalDeposit);
}

///Define a function that returns the total number of withdrawals//
function countWithDrawals() {
  let result = 0;
  user.transactionsMonthToDate.forEach((item) => {
    console.log(item.type);
    if (item.type == "withdrawal") {
      result += 1;
    } else {
      result += 0;
    }
  });
  console.log(result);
}
countWithDrawals();
//Define a function that returns the sum of withdrawals//
function withdrawals() {
  let totalwithdrawals = user.transactionsMonthToDate.reduce(
    (total, currentAmount) => {
      let withdrawal = 0;
      if (currentAmount.type == "withdrawal") {
        withdrawal = currentAmount.amount;
      } else {
        currentAmount.amount = 0;
      }
      return total + currentAmount.amount;
    },
    0
  );
  console.log("totalwithdrawals", totalwithdrawals);
}
///Define a function that returns the difference between deposits and withdrawals//

function compare() {
  let totalwithdrawals = user.transactionsMonthToDate.reduce(
    (total, currentAmount) => {
      let withdrawal = 0;
      if (currentAmount.type == "withdrawal") {
        withdrawal = currentAmount.amount;
      } else {
        currentAmount.amount = 0;
      }
      return total + currentAmount.amount;
    },
    0
  );
  let totalDeposit = user.transactionsMonthToDate.reduce(
    (total, currentDeposit) => {
      let totalDept = 0;
      if (currentDeposit.type == "deposit") {
        totalDept = currentDeposit.amount;
      } else {
        currentDeposit.amount = 0;
      }
      return total + currentDeposit.amount;
    },
    0
  );
  console.log(Math.abs(totalwithdrawals - totalDeposit));
}
///Define a function that returns a new balance for the next month//
function newBalance() {
  let result = " ";
  result = `Balance: $${user.currentBalance} \n Transaction History: \n`;
  user.transactionsMonthToDate.forEach((item) => {
    if (item.type === "withdrawal") {
      result += `- You withdrew $${
        item.amount
      }. The new balance is $${`${(user.currentBalance -= item.amount)}`} . \n`;
    }
    if (item.type === "deposit") {
      result += `- You deposited $${
        item.amount
      }.The new balance is $${`${(user.currentBalance += item.amount)}`} . \n`;
    }
  });
  console.log("result", result.slice(-29));
}
