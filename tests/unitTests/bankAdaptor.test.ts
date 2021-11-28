import { BankAdaptor } from "../../src/bankAdaptor"
import NotImplementedError from "../../src/errors/NotImpementedError";
import { BankTransferInput, TransferOutput } from "../../src/types/bankTypes";

const CLASS_NAME = BankAdaptor.name;
const TRANSFER_MONEY_FUNCTION_NAME = BankAdaptor.defaultInstance.transferMoney.name;

describe(`${CLASS_NAME} unit tests`, () => {
    it(`${TRANSFER_MONEY_FUNCTION_NAME} Valid Bank`, async () => {

        const parameters: BankTransferInput = {
            bankCode: 'A',
            fromAccount: '175813',
            toAccount: '876231',
            amount: 1246,
            currency: 'EUR'
        };

        const result: TransferOutput = await BankAdaptor.defaultInstance.transferMoney(parameters);

        expect(typeof result).toEqual('TransferOutput');
    });

    it(`${TRANSFER_MONEY_FUNCTION_NAME} Invalid Bank`, async () => {

        const parameters: BankTransferInput = {
            bankCode: 'X',
            fromAccount: '175813',
            toAccount: '876231',
            amount: 1246,
            currency: 'EUR'
        };

        try {
            const result: TransferOutput = await BankAdaptor.defaultInstance.transferMoney(parameters);

            throw new Error(`Code must not show this message`);
        } catch (error: any) {
            expect(error).toBeInstanceOf(NotImplementedError);
        }
    })

});