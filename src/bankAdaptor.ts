import { BankA, BankB } from './banks';
import { NotImplementedError } from './errors';
import { BankInterface, BankTransferInput, TransferInput, TransferOutput } from "./types/bankTypes";

const Banks: Array<BankInterface> = [BankA.defaultInstance, BankB.defaultInstance];

export class BankAdaptor {

    static defaultInstance = new BankAdaptor();

    private getBank(bankCode): BankInterface {
        const bank: any = Banks.find((bank: any) => bank.bankCode === bankCode);

        if (!bank) {
            throw new NotImplementedError(`Bank "${bankCode}" not implemented`);
        }
        return bank;
    }

    async transferMoney(transferAdaptorInput: BankTransferInput): Promise<TransferOutput> {

        const bank = this.getBank(transferAdaptorInput.bankCode);

        const transferInput = transferAdaptorInput as TransferInput;
        const result: TransferOutput = await bank.transferMoney(transferInput);
        return result;

    };

}