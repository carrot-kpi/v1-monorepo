import { ChainId } from "@carrot-kpi/sdk";
import { FunctionComponent, SVGProps } from "react";
import { gnosis, sepolia } from "wagmi/chains";
import { Chain } from "wagmi/chains";
import EthereumLogo from "../icons/chains/ethereum";
import GnosisLogo from "../icons/chains/gnosis";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const CARROT_KPI_FRONTEND_I18N_NAMESPACE = "@carrot-kpi/frontend";

export interface AugmentedChain extends Chain {
    logo: FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
    iconBackgroundColor: string;
    enabled: boolean;
}

export const SUPPORTED_CHAINS: Record<ChainId, AugmentedChain> = {
    [ChainId.GNOSIS]: {
        ...gnosis,
        logo: GnosisLogo,
        iconBackgroundColor: "#04795b",
        enabled: !__STAGING__,
    },
    [ChainId.SEPOLIA]: {
        ...sepolia,
        logo: EthereumLogo,
        iconBackgroundColor: "#8637ea",
        enabled: true,
    },
};

export const ENABLED_CHAINS: { [chainId: number]: AugmentedChain } =
    Object.entries(SUPPORTED_CHAINS).reduce(
        (
            accumulator: { [chainId: number]: AugmentedChain },
            [chainId, augmentedChain]
        ) => {
            if (augmentedChain.enabled)
                accumulator[parseInt(chainId)] = augmentedChain;
            return accumulator;
        },
        {}
    );

export const DEFAULT_CHAIN: Chain = Object.values(ENABLED_CHAINS).filter(
    (chain) => chain.enabled
)[0];

export interface NavbarLink {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component?: FunctionComponent<any>;
    title: string;
    to: string;
}

export const NAVBAR_LINKS: NavbarLink[] = [
    {
        Component: NavLink,
        title: "About",
        to: "/about",
    },
    {
        Component: NavLink,
        title: "Campaigns",
        to: "/campaigns",
    },
    {
        title: "Community",
        to: "/community",
    },
];

export interface FooterLink {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component?: FunctionComponent<any>;
    title: string;
    links: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Component?: FunctionComponent<any>;
        title: string;
        to: string;
    }[];
}

export const FOOTER_LINKS: FooterLink[] = [
    {
        title: "About",
        links: [
            {
                Component: Link,
                title: "Faq",
                to: "/faq",
            },
            {
                title: "Twitter",
                to: "/twitter",
            },
            {
                title: "Keybase",
                to: "/keybase",
            },
            {
                title: "Forum",
                to: "/forum",
            },
        ],
    },
    {
        title: "Community",
        links: [
            {
                title: "Discord",
                to: "/Discord",
            },
            {
                title: "Blog",
                to: "/Blog",
            },
            {
                title: "Jobs",
                to: "/jobs",
            },
            {
                title: "Brand Assets",
                to: "/brand-icons",
            },
        ],
    },
    {
        title: "Documentation",
        links: [
            {
                title: "DIY Liq. Mining",
                to: "/diy-liq-mining",
            },
            {
                title: "Roadmap",
                to: "/Roadmap",
            },
            {
                title: "Audits",
                to: "/audits",
            },
            {
                title: "Token",
                to: "/token",
            },
        ],
    },
    {
        title: "Analytics",
        links: [
            {
                title: "Dune",
                to: "https://dune.com/hagaetc/dxdao",
            },
        ],
    },
];
