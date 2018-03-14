
import * as shajs from 'sha.js';

export class BlockComponent {

  nonce:number;
  timestamp:string;
  transactions=[];
  previousHash:string;
  hash:string;

  constructor( timestamp, transactions, previousHash = ''){
    this.timestamp=timestamp;
    this.transactions=transactions;
    this.previousHash=previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash(){
    return shajs('sha256').update((this.previousHash + this.timestamp + JSON.stringify(this.transactions)+this.nonce).toString()).digest("hex");
  }

  mineBlock(difficulty){
    while(this.hash.substring(0,difficulty) !== Array(difficulty + 1).join("0")){
      this.nonce++;
      this.hash=this.calculateHash();
    }

    console.log("Block mined, hash = " + this.hash);
  }

}
