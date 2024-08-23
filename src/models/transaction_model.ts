import {Schema, Prop, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Transaction {
    @Prop({required: true})
    amount: number;

    @Prop({required: true})
     static  title: string;

    @Prop({required: true})
    date: string
   
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);