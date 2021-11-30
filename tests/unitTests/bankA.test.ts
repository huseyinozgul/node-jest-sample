import { mocked } from "ts-jest/utils";
import { BankA } from "../../src/banks";
import { NotImplementedError } from "../../src/errors";
import { TransferInput, TransferOutput } from "../../src/types/bankTypes";

const CLASS_NAME = BankA.name;
const TRANSFER_MONEY_FUNCTION_NAME = BankA.defaultInstance.transferMoney.name;

describe(`${CLASS_NAME} unit tests`, () => {
    it(`${TRANSFER_MONEY_FUNCTION_NAME} Valid Result`, async () => {

        const transferMoneyInput = {
            fromAccount: '175813',
            toAccount: '876231',
            amount: 1246,
            currency: 'EUR'
        };

        const transferMoneyResult = {
            success: true, message: `BankA, ${transferMoneyInput.fromAccount} transfer ${transferMoneyInput.amount}${transferMoneyInput.currency} to ${transferMoneyInput.toAccount}`
        }

        const result = await BankA.defaultInstance.transferMoney(transferMoneyInput);
        expect(result).toEqual(transferMoneyResult);
    });
})