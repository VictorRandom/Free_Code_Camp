function checkCashRegister(price, cash, cid) {

    let change;
    change = cash - price 

    if (change < 0){
      change = {status: "INSUFFICIENT_FUNDS", change: []}
      return change
    }

    console.log(change)
    
    return change;

  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
