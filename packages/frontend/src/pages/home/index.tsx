import React from "react";
import { GridPatternBg } from "../../components/ui/grid-pattern-bg";
import { PageWrapper } from "../../components/ui/page-wrapper";
// import { useKpiTokens } from "@carrot-kpi/react";
// import { chain, useAccount, useConnect } from "wagmi";
// import { InjectedConnector } from "wagmi/connectors/injected";
// import { useTranslation } from "react-i18next";
// import { KpiToken } from "@carrot-kpi/sdk";
import { Hero } from "./hero";
import { LatestCampaignsSection } from "./latest-campaigns-section";
import { TemplatesSection } from "./templates-section";

export const Home = () => {
    // const { t } = useTranslation();
    // const { isConnected } = useAccount();
    // const { connect, connectors, isLoading, pendingConnector, error } =
    //     useConnect({
    //         connector: new InjectedConnector({
    //             chains: [chain.sepolia, chain.goerli],
    //         }),
    //     });
    // const { loading, kpiTokens } = useKpiTokens();

    // const [kpiTokensArray, setKpiTokensArray] = useState<KpiToken[]>([]);

    // useEffect(() => {
    //     setKpiTokensArray(Object.values(kpiTokens));
    // }, [kpiTokens]);

    return (
        <>
            <Hero />
            <div className="relative py-32">
                <GridPatternBg bg="white" fullSize />
                <PageWrapper className="space-y-32">
                    <LatestCampaignsSection />
                    <TemplatesSection />
                </PageWrapper>
            </div>

            {/* {!isConnected &&
                connectors.map((connector) => (
                    <button
                        disabled={!connector.ready}
                        key={connector.id}
                        onClick={() => connect({ connector })}
                    >
                        {connector.name}
                        {!connector.ready && " (unsupported)"}
                        {isLoading &&
                            connector.id === pendingConnector?.id &&
                            " (connecting)"}
                    </button>
                ))}
            {!!error && error.message}
            {isConnected && (
                <Link to="/create">
                    <button>{t("home.createKpiToken")}</button>
                </Link>
            )}
            {loading && <>{t("home.loading")}...</>}
            {!loading && kpiTokensArray.length > 0 && (
                <ul>
                    {kpiTokensArray.map((token) => (
                        <li key={token.address}>
                            {token.specification.title}{" "}
                            <Link to={`/campaigns/${token.address}`}>
                                <button>{t("home.viewCampaign")}</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            {!loading && kpiTokensArray.length === 0 && (
                <>{t("home.noKpiToken")}</>
            )} */}
        </>
    );
};
