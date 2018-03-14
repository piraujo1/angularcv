export class TransactionComponent {

  fromAddress: string;
  toAddress: string;
  amount: string;

  constructor(fromAddress, toAddress, amount){
    this.fromAddress=fromAddress;
    this.toAddress=toAddress;
    this.amount = amount;
  }

}
