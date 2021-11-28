import { BankInterface, TransferInput, TransferOutput } from "../types/bankTypes";

export class BankA implements BankInterface {

    static defaultInstance = new BankA();

    bankCode: string = 'A';

    async transferMoney(transferInput: TransferInput): Promise<TransferOutput> {
        const result: TransferOutput = {
            success: true, message: `BankA, ${transferInput.fromAccount} transfer ${transferInput.amount}${transferInput.currency} to ${transferInput.toAccount}`
        }
        return result;
    };
}
