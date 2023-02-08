import { Button, PlusSignPattern } from "@carrot-kpi/ui";
import React from "react";
import { FeaturedCampaings } from "../../../components/featured-campaigns";
import { GridPatternBg } from "../../../components/ui/grid-pattern-bg";
import { PageWrapper } from "../../../components/ui/page-wrapper";
import { CardHorizontal } from "../../../components/ui/cards-horizontal";
import { DXdaoSideLink } from "./DXdaoSideLink";
import { Link } from "react-router-dom";
import { ResponsiveHeader } from "../../../components/ui/responsive-header";
import { useTranslation } from "react-i18next";

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="relative light bg-orange">
            <GridPatternBg bg="orange" />
            <PageWrapper>
                <div className="relative space-y-12 py-7 md:py-24">
                    <ResponsiveHeader autoAlign variant="h1">
                        {t("home.featuredCampaigns")}
                    </ResponsiveHeader>
                    <CardHorizontal>
                        <FeaturedCampaings />
                    </CardHorizontal>
                    <div className="flex flex-col space-x-0 space-y-6 md:space-y-0 md:flex-row md:space-x-8">
                        <Link to="/campaigns">
                            <Button variant="primary" size="big">
                                All campaigns
                            </Button>
                        </Link>
                        <Button variant="secondary" size="big">
                            Create campaign
                        </Button>
                    </div>
                </div>
            </PageWrapper>
            <div className="absolute invisible left-4 top-1/3 lg:visible ">
                <DXdaoSideLink />
            </div>
            <PlusSignPattern y="top" x="left" />
            <PlusSignPattern y="top" x="right" />
            <PlusSignPattern y="bottom" x="left" />
            <PlusSignPattern y="bottom" x="right" />
        </div>
    );
};
