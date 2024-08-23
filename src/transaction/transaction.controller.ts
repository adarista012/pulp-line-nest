import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {
    constructor(private transactionService: TransactionService){}

    @Post()
    async create(@Body() createTransaction: any) {
        return createTransaction;
        
    }

    @Get()
  getHello(): string {
    return 'Hello';
  }
}
