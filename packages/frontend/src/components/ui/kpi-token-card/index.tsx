import React from "react";
import {
    Chip,
    Typography,
    Skeleton,
    Card,
    CardTitle,
    CardContent,
    CardActions,
    Markdown,
} from "@carrot-kpi/ui";
import { cva } from "class-variance-authority";
import { KPIToken, ResolvedKPIToken } from "@carrot-kpi/sdk";
import { Link } from "react-router-dom";
import { useResolvedKPIToken } from "@carrot-kpi/react";
import { TimeLeft } from "./time-left";

const rootStyles = cva(
    [
        "min-w-[320px]",
        "max-w-[320px]",
        "rounded-xxl",
        "flex",
        "flex-col",
        "justify-between",
        "border",
        "bg-white",
        "dark:bg-black",
    ],
    {
        variants: {
            noBorder: {
                true: ["border-white dark:border-black"],
                false: ["border-black dark:border-white"],
            },
        },
        defaultVariants: {
            noBorder: false,
        },
    }
);

interface KPITokenCardProps {
    kpiToken?: KPIToken | ResolvedKPIToken;
    noBorder?: boolean;
}

export const KPITokenCard = ({ kpiToken, noBorder }: KPITokenCardProps) => {
    const { loading, resolvedKPIToken } = useResolvedKPIToken(kpiToken);

    return (
        <Card className={{ root: rootStyles({ noBorder }) }}>
            <CardTitle>
                <div className="flex items-center justify-between w-full">
                    {!loading && !!resolvedKPIToken ? (
                        <Typography weight="medium" uppercase truncate>
                            {resolvedKPIToken.specification.title}
                        </Typography>
                    ) : (
                        <Skeleton width={80} />
                    )}
                </div>
                {/* TODO: handle logo fetching for creators */}
                {/* {!!resolvedKPIToken && (
                        <div className="flex items-center border-r border-gray-600">
                            <Skeleton
                                className={{ root: "w-6 h-6 mx-3" }}
                                circular
                            />
                        </div>
                    )} */}
            </CardTitle>
            <CardContent>
                <div className="h-58">
                    <div className="h-40 overflow-hidden px-4 pt-4">
                        {!loading && !!resolvedKPIToken ? (
                            <Markdown
                                className={{
                                    root: "prose prose-headings:mt-0 line-clamp-5 overflow-hidden",
                                }}
                            >
                                {resolvedKPIToken.specification.description}
                            </Markdown>
                        ) : (
                            <div className="flex flex-col gap-3">
                                <Skeleton width="100%" />
                                <Skeleton width="100%" />
                                <Skeleton width="100%" />
                                <Skeleton width="20%" />
                            </div>
                        )}
                    </div>
                    <div className="relative h-16 py-4">
                        <div className="absolute pointer-events-none top-0 left-0 w-full h-full shadow-horizontal-scroller shadow-white dark:shadow-black" />
                        <div className="flex gap-3 overflow-x-auto px-4 scrollbar-none">
                            {!loading && !!resolvedKPIToken ? (
                                <>
                                    <Chip>
                                        {
                                            resolvedKPIToken.template
                                                .specification.name
                                        }
                                    </Chip>
                                    {resolvedKPIToken.specification.tags.map(
                                        (tag) => (
                                            <Chip key={tag}>{tag}</Chip>
                                        )
                                    )}
                                </>
                            ) : (
                                <>
                                    <Skeleton variant="xl" width={80} />
                                    <Skeleton variant="xl" width={60} />
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="h-12 flex items-center justify-between w-full border-t border-black dark:border-white">
                    <div className="flex items-center px-4 h-12 w-[40%]">
                        {!loading && !!resolvedKPIToken ? (
                            <Typography uppercase>Time left</Typography>
                        ) : (
                            <Skeleton width="60%" />
                        )}
                    </div>
                    <div className="flex items-center justify-end px-4 h-12 w-[60%] border-l border-black dark:border-white">
                        {!loading && !!resolvedKPIToken ? (
                            <TimeLeft kpiToken={resolvedKPIToken} />
                        ) : (
                            <Skeleton width="60%" />
                        )}
                    </div>
                </div>
            </CardContent>
            <CardActions className={{ root: "justify-center" }}>
                <div className="flex h-6 justify-center items-center w-full">
                    {!loading && !!resolvedKPIToken ? (
                        <Link
                            to={`/campaigns/${resolvedKPIToken.address}`}
                            state={{ resolvedKPIToken }}
                        >
                            <Typography weight="medium">
                                ↳ VIEW CAMPAIGN
                            </Typography>
                        </Link>
                    ) : (
                        <Skeleton width="40%" />
                    )}
                </div>
            </CardActions>
        </Card>
    );
};
