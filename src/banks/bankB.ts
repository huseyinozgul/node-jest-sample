import { BankInterface, TransferInput, TransferOutput } from "../types/bankTypes";

export class BankB implements BankInterface {

    static defaultInstance = new BankB();

    bankCode: string = 'B';

    async transferMoney(transferInput: TransferInput): Promise<TransferOutput> {
        const result: TransferOutput = {
            success: false, message: `BankB, ${transferInput.fromAccount}'s balance is insufficient`
        }
        return result;
    };

}