import { Tx, TxType } from "@carrot-kpi/react";
import { useNetwork } from "wagmi";
import { useDispatch } from "../state/connector";
import { addTransaction } from "../state/reducers/transactions";
import { serializeTransaction } from "../utils/transactions";

export const useAddTransaction = () => {
    const dispatch = useDispatch();
    const { chain } = useNetwork();

    return <T extends TxType>(tx: Tx<T>) => {
        if (!chain) {
            console.warn(`could not add transaction: chain is undefined`);
            return;
        }
        dispatch(
            addTransaction({
                chainId: chain.id,
                txHash: tx.hash,
                serializedTx: serializeTransaction(tx),
            })
        );
    };
};
