import React, { useEffect, useState } from "react";
import { useKpiTokens } from "@carrot-kpi/react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { useTranslation } from "react-i18next";
import { KpiToken } from "@carrot-kpi/sdk";
import { Button, PlusSignPattern } from "@carrot-kpi/ui";
import { PageWrapper } from "../../components/ui/page-wrapper";
import { MainTitle } from "../../components/ui/main-title";
import { FeaturedCampaings } from "../../components/featured-campaigns";
import { DXdaoSideLink } from "./hero/DXdaoSideLink";
import { CardHorizontal } from "./hero/CardsHorizontal";
import { GridPatternBg } from "../../components/ui/grid-pattern-bg";

export const Home = () => {
    const { t } = useTranslation();
    const { isConnected } = useAccount();
    const { loading, kpiTokens } = useKpiTokens();

    const [kpiTokensArray, setKpiTokensArray] = useState<KpiToken[]>([]);

    useEffect(() => {
        setKpiTokensArray(Object.values(kpiTokens));
    }, [kpiTokens]);

    return (
        <>
            <div className="relative bg-carrot-orange">
                <GridPatternBg />
                <PageWrapper>
                    <div className="relative space-y-12 py-7 md:py-24">
                        <MainTitle>Featured campaigns</MainTitle>
                        <CardHorizontal>
                            <FeaturedCampaings />
                        </CardHorizontal>
                        <div className="flex flex-col space-x-0 space-y-6 md:space-y-0 md:flex-row md:space-x-8">
                            <Button variant="primary" size="big">
                                All campaigns
                            </Button>
                            <Button variant="secondary" size="big">
                                Create campaign
                            </Button>
                        </div>
                    </div>
                </PageWrapper>
                <div className="absolute left-4 top-1/3">
                    <DXdaoSideLink />
                </div>
                <PlusSignPattern y="top" x="left" />
                <PlusSignPattern y="top" x="right" />
                <PlusSignPattern y="bottom" x="left" />
                <PlusSignPattern y="bottom" x="right" />
            </div>
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
            )}
        </>
    );
};
