import { BigNumberish } from "@ethersproject/bignumber";
import { Provider } from "@ethersproject/providers";
import { KPIToken } from "../entities/kpi-token";
import { Template } from "../entities/template";
import { Oracle } from "../entities/oracle";
import { IFullCarrotFetcher } from "./abstraction";
import { OnChainFetcher } from "./on-chain";
import { SubgraphFetcher } from "./subgraph";

class FullFetcher implements IFullCarrotFetcher {
    private async shouldUseSubgraph(
        provider: Provider,
        preferDecentralization: boolean
    ) {
        if (preferDecentralization) return false;
        const { chainId } = await provider.getNetwork();
        return SubgraphFetcher.supportedInChain(chainId);
    }

    async fetchKPITokens(
        provider: Provider,
        preferDecentralization = false,
        addresses?: string[]
    ): Promise<{ [address: string]: KPIToken }> {
        const useSubgraph = await this.shouldUseSubgraph(
            provider,
            preferDecentralization
        );
        return useSubgraph
            ? SubgraphFetcher.fetchKPITokens(provider, addresses)
            : OnChainFetcher.fetchKPITokens(provider, addresses);
    }

    async fetchOracles(
        provider: Provider,
        preferDecentralization = false,
        addresses?: string[]
    ): Promise<{ [address: string]: Oracle }> {
        const useSubgraph = await this.shouldUseSubgraph(
            provider,
            preferDecentralization
        );
        return useSubgraph
            ? SubgraphFetcher.fetchOracles(provider, addresses)
            : OnChainFetcher.fetchOracles(provider, addresses);
    }

    async fetchKPITokenTemplates(
        provider: Provider,
        preferDecentralization = false,
        ids?: BigNumberish[]
    ): Promise<Template[]> {
        const useSubgraph = await this.shouldUseSubgraph(
            provider,
            preferDecentralization
        );
        return useSubgraph
            ? SubgraphFetcher.fetchKPITokenTemplates(provider, ids)
            : OnChainFetcher.fetchKPITokenTemplates(provider, ids);
    }

    async fetchOracleTemplates(
        provider: Provider,
        preferDecentralization = false,
        ids?: BigNumberish[]
    ): Promise<Template[]> {
        const useSubgraph = await this.shouldUseSubgraph(
            provider,
            preferDecentralization
        );
        return useSubgraph
            ? SubgraphFetcher.fetchOracleTemplates(provider, ids)
            : OnChainFetcher.fetchOracleTemplates(provider, ids);
    }
}

export const Fetcher = new FullFetcher();
