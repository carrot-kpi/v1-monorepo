import React, { useEffect } from "react";
import { Layout } from "../../components/layout";
import { Hero } from "./hero";
import { LatestCampaignsSection } from "./latest-campaigns-section";
import { TemplatesSection } from "./templates-section";
import { useFeaturedKPITokens } from "../../hooks/useFeaturedKPITokens";
import { CarrotMarquee } from "../../components/ui/carrot-marquee";

interface HomeProps {
    templateId?: number;
}

export const Home = ({ templateId }: HomeProps) => {
    const { loading: loadingFeaturedKPITokens, kpiTokens: featuredKPITokens } =
        useFeaturedKPITokens();

    useEffect(() => {
        const bodyElement = window.document.getElementById("__app_body");
        if (!bodyElement) return;
        bodyElement.scroll({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    if (loadingFeaturedKPITokens) return null;
    return (
        <Layout>
            <Hero featuredKPITokens={featuredKPITokens} />
            <CarrotMarquee />
            <div className="relative py-16 md:py-20 lg:py-32 dark:bg-black">
                <div className="space-y-32 md:space-y-20 lg:space-y-32 flex flex-col items-center mx-6 md:mx-10 lg:mx-32">
                    <LatestCampaignsSection />
                    <TemplatesSection templateId={templateId} />
                </div>
            </div>
        </Layout>
    );
};
