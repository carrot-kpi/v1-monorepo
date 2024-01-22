import {
    Fetcher,
    ResolvedKPIToken,
    Service,
    getServiceURL,
} from "@carrot-kpi/sdk";
import { type Address, usePublicClient } from "wagmi";
import { useEffect, useState } from "react";
import { useIPFSGatewayURL } from "./useIPFSGatewayURL";
import { usePreferDecentralization } from "./usePreferDecentralization";
import { useProdMode } from "./useProdMode";

interface ResolvedKPITokensParams {
    blacklisted?: Address[];
}

export function useResolvedKPITokens(params?: ResolvedKPITokensParams): {
    loading: boolean;
    resolvedKPITokens: ResolvedKPIToken[];
} {
    const publicClient = usePublicClient();
    const preferDecentralization = usePreferDecentralization();
    const ipfsGatewayURL = useIPFSGatewayURL();
    const prodMode = useProdMode();
    const [resolvedKPITokens, setResolvedKPITokens] = useState<
        ResolvedKPIToken[]
    >([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;
        async function fetchData(): Promise<void> {
            if (!cancelled) setLoading(true);

            try {
                const kpiTokens = await Fetcher.fetchKPITokens({
                    publicClient,
                    preferDecentralization,
                    blacklisted: params?.blacklisted,
                });

                const resolvedKPITokens: ResolvedKPIToken[] = [];
                await Promise.allSettled(
                    Object.values(kpiTokens).map(async (kpiToken) => {
                        try {
                            const resolved = (
                                await Fetcher.resolveKPITokens({
                                    ipfsGatewayURL,
                                    dataCDNURL: getServiceURL(
                                        Service.DATA_CDN,
                                        prodMode,
                                    ),
                                    preferDecentralization,
                                    kpiTokens: [kpiToken],
                                })
                            )[kpiToken.address];
                            if (!resolved) return;
                            resolvedKPITokens.push(resolved);
                        } catch (error) {
                            console.error(
                                `error resolving kpi token at address ${kpiToken.address}`,
                                error,
                            );
                        }
                    }),
                );

                if (!cancelled) setResolvedKPITokens(resolvedKPITokens);
            } catch (error) {
                console.error("error fetching resolved kpi tokens", error);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        void fetchData();
        return () => {
            cancelled = true;
        };
    }, [
        ipfsGatewayURL,
        prodMode,
        publicClient,
        preferDecentralization,
        params?.blacklisted,
    ]);

    return { loading, resolvedKPITokens };
}
