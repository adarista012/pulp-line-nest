import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from 'src/models/transaction.schema';


@Injectable()
export class TransactionService {
    constructor(@InjectModel(Transaction.title) private transactionModel: Model<Transaction>){}

    async create(transaction
        : any){
            const createdTransaction = new this.transactionModel(transaction);
            return createdTransaction.save();
        }
    
}
