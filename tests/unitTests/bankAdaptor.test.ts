import { mocked } from "ts-jest/utils";
import { BankA } from "../../src/banks/bankA";
import { BankB } from "../../src/banks/bankB";
import { BankAdaptor } from "../../src/bankAdaptor"
import { NotImplementedError } from "../../src/errors";
import { BankTransferInput, TransferOutput } from "../../src/types/bankTypes";

const CLASS_NAME = BankAdaptor.name;
const TRANSFER_MONEY_FUNCTION_NAME = BankAdaptor.defaultInstance.transferMoney.name;

describe(`${CLASS_NAME} unit tests`, () => {
    it(`${TRANSFER_MONEY_FUNCTION_NAME} Valid Bank For A`, async () => {

        const transferMoneyInput: BankTransferInput = {
            bankCode: 'A',
            fromAccount: '175813',
            toAccount: '876231',
            amount: 1246,
            currency: 'EUR'
        };

        const transferMoneyResult = {
            success: true, message: `BankA, ${transferMoneyInput.fromAccount} transfer ${transferMoneyInput.amount}${transferMoneyInput.currency} to ${transferMoneyInput.toAccount}`
        }

        const result = await BankAdaptor.defaultInstance.transferMoney(transferMoneyInput);
        expect(result).toEqual(transferMoneyResult);
    });

    it(`${TRANSFER_MONEY_FUNCTION_NAME} Invalid Bank`, async () => {

        const transferMoneyInput: BankTransferInput = {
            bankCode: 'X',
            fromAccount: '175813',
            toAccount: '876231',
            amount: 1246,
            currency: 'EUR'
        };

        try {
            const result = await BankAdaptor.defaultInstance.transferMoney(transferMoneyInput);

            throw new Error(`Code must not show this message`);
        } catch (error: any) {
            expect(error).toBeInstanceOf(NotImplementedError);
        }
    })

});