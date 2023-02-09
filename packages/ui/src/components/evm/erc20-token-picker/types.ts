import { BigNumber } from "@ethersproject/bignumber";
import { TokenInfo, TokenList } from "@uniswap/token-lists";

export type TokenInfoWithBalance = Omit<TokenInfo, "balance"> & {
    balance: BigNumber;
};

export type TokenListWithBalance = Omit<TokenList, "tokens"> & {
    tokens: TokenInfoWithBalance[];
};