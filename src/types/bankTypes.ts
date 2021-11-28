export type TransferInput = {
    fromAccount: string,
    toAccount: string,
    amount: number,
    currency: string,
}

export type TransferOutput = {
    success: boolean,
    message: string
}

export type BankTransferInput = TransferInput & { bankCode: string }

export interface BankInterface {
    transferMoney(transferInput: TransferInput): Promise<TransferOutput>
}

export interface BankAdaptorInterface {
    transferMoney(transferInput: BankTransferInput): Promise<TransferOutput>
}