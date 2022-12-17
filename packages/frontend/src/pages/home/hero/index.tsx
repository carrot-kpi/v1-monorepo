import { Button, PlusSignPattern } from "@carrot-kpi/ui";
import React from "react";
import { FeaturedCampaings } from "../../../components/featured-campaigns";
import { GridPatternBg } from "../../../components/ui/grid-pattern-bg";
import { MainTitle } from "../../../components/ui/main-title";
import { PageWrapper } from "../../../components/ui/page-wrapper";
import { CardHorizontal } from "../../../components/ui/cards-horizontal";
import { DXdaoSideLink } from "./DXdaoSideLink";

export const Hero = () => (
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
);
