import { BankAdaptor } from "./bankAdaptor";
import { TransferOutput } from "./types/bankTypes";

const main = async () => {

    console.log(await BankAdaptor.defaultInstance.transferMoney({ bankCode: 'A', fromAccount: 'x', toAccount: 'y', amount: 30, currency: 'USD' }));
    console.log(await BankAdaptor.defaultInstance.transferMoney({ bankCode: 'B', fromAccount: 'a', toAccount: 'b', amount: 150, currency: 'TRY' }));
    console.log(await BankAdaptor.defaultInstance.transferMoney({ bankCode: 'B', fromAccount: 'e', toAccount: 'd', amount: 50, currency: 'EUR' }));
    console.log(await BankAdaptor.defaultInstance.transferMoney({ bankCode: 'U', fromAccount: 'z', toAccount: 'm', amount: 1240, currency: 'GBP' }));

}

main();

