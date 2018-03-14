import {Component, OnInit} from '@angular/core';
import * as shajs from 'sha.js';
import {BlockComponent} from "../block/block.component";
import {TransactionComponent} from "../transaction/transaction.component";

@Component({
    selector: 'app-blockchain',
    templateUrl: './blockchain.component.html',
    styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {

    tohash: string;
    hashdemo: string;
    btnText: string = 'Hash';
    chain=[];
    difficulty:number;
    pendingTransactions=[];
    miningReward:number;

    ngOnInit() {
        this.tohash = "Text to hash";
        this.hashdemo = this.hash(this.tohash);
    }

    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    hash(text:string){
        return shajs('sha256').update(text).digest("hex");
    }

    fcthash(){
        this.hashdemo=this.hash(this.tohash);
    }

    constructor(){
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 5;
        this.pendingTransactions=[];
        this.miningReward=100;
    }

    createGenesisBlock(){
        return new BlockComponent("01/01/2018","Genesis block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress){
        let block = new BlockComponent(Date.now(), this.pendingTransactions);
        block.mineBlock(this.difficulty);
        console.log('Block successfully mined');
        this.chain.push(block);
        this.pendingTransactions=[
            new TransactionComponent(null,miningRewardAddress,this.miningReward)
        ];
    }

    createTransaction(transaction){
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address){
        let balance=0;

        for (const block of this.chain){
            for (const trans of block.transactions){
                if (trans.toAddress === address){
                    balance += trans.amount;
                }
                if (trans.fromAddress === address){
                    balance -= trans.amount;
                }

            }
        }
        return balance;
    }

    isChainValid(){
        for(let i=1; i<this.chain.length; i++){
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash !== currentBlock.calculateHash()){
                return false;
            }
            if(currentBlock.previousHash !== previousBlock.hash){
                return false;
            }
        }
        return true;
    }

}


