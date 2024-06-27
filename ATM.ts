interface Account {
  name: String;
  account_id: number;
  balance: number;
  atm_key?: any;
}
class Bank {
  name: string = "CENT BANK";
  bank_id: number = Math.ceil(Math.random() * Math.random() * Date.now());
  balance: number = 0;
  accounts: Account[] = new Array();
  constructor(bal) {
    this.balance = bal;
  }

  createAccount(name: string, balance: number, key: any) {
    this.accounts.push({
      name,
      balance,
      account_id: Math.ceil(Math.random() * Date.now()),
      atm_key: key,
    });
  }
  transferAmount(from: number, to: number, amount: number, key:number) {
    let senderIndex: number = this.accounts.findIndex(
      (acc: Account) => acc.account_id === from && acc.atm_key === key
    );
    if (!senderIndex) {
      throw new Error("Please enter Correct Account Details.");
    }
    if (this.accounts[senderIndex].balance < amount) {
      throw new Error("insufficient account balance ");
    }
    let receiverIndex: number = this.accounts.findIndex(
      (acc: Account) => (acc.account_id = to)
    );

    if(!receiverIndex){
        throw new Error("Please enter correct receiver account details.");
    }
  }
}

const cantBank = new Bank(1000);
cantBank.createAccount("Ajay Panchal",100,123);
cantBank.createAccount("BalPreet", 100,123);

cantBank.transferAmount()
// console.log(cantBank);
console.log("BANK",cantBank)