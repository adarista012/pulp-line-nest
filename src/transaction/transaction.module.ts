import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { Transaction, TransactionSchema } from 'src/models/transaction.schema';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';


@Module({
    imports:[
    MongooseModule.forFeature([{ name: 'Transaction.title', schema: TransactionSchema }])],
    controllers: [TransactionController],
     providers: [TransactionService],
})
export class TransactionModule {}
