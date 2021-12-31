const checkCashRegister = (price, cash, cid) => {

  const coins = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }
  let totalCID = 0;
  for (let i of cid) {
    totalCID += i[1];
  }
  totalCID = totalCID.toFixed(2);

  let change = cash - price;
  const array = [];

  if (change > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: array };
  } else if (change.toFixed(2) === totalCID) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let j of cid) {
      let temp = [j[0], 0];
      while (change >= coins[j[0]] && j[1] > 0) {
        temp[1] += coins[j[0]];
        j[1] -= coins[j[0]];
        change -= coins[j[0]];
        change = change.toFixed(2);
      }
      if (temp[1] > 0) {
        array.push(temp);
      }
    }
  }
  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  return { status: "OPEN", change: array};
}
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
