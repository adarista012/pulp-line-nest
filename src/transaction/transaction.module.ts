import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Transaction, TransactionSchema } from 'src/models/transaction_model';


@Module({imports:[
    MongooseModule.forFeature([{
        name: Transaction.title,
        schema: TransactionSchema, 
    }])
]})
export class TransactionModule {}
