import "./i18n";

import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@carrot-kpi/ui/styles.css";

import "./global.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { HashRouter } from "react-router-dom";

import { Chain, ChainProviderFn, Connector } from "wagmi";
import { ThemeUpdater } from "./updaters";
import { App } from "./pages/app";
import { CarrotCoreProvider } from "@carrot-kpi/react";
import {
    getStandaloneConnectors,
    standaloneProviders,
    standaloneSupportedChains,
} from "./standalone-setup";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a react query client
const queryClient = new QueryClient();

interface RootProps {
    supportedChains?: Chain[];
    providers?: ChainProviderFn[];
    connectors?: () => Connector[];
    ipfsGatewayURL?: string;
    customBaseURL?: string;
    templateId?: number;
}

export const Root = ({
    supportedChains,
    providers,
    connectors,
    ipfsGatewayURL,
    customBaseURL,
    templateId,
}: RootProps) => {
    return (
        <HashRouter>
            <ThemeUpdater />
            <QueryClientProvider client={queryClient}>
                <CarrotCoreProvider
                    supportedChains={
                        supportedChains || standaloneSupportedChains
                    }
                    providers={providers || standaloneProviders}
                    getConnectors={connectors || getStandaloneConnectors}
                    ipfsGatewayURL={ipfsGatewayURL}
                >
                    <App
                        customBaseURL={customBaseURL}
                        templateId={templateId}
                    />
                </CarrotCoreProvider>
            </QueryClientProvider>
        </HashRouter>
    );
};

if (!__PREVIEW_MODE__) {
    const container = document.getElementById("root");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const root = createRoot(container!);
    root.render(
        <StrictMode>
            <Root />
        </StrictMode>
    );

    if ("serviceWorker" in navigator) {
        navigator.serviceWorker
            .register("./sw.js")
            .then(() => {
                console.log("carrot service worker registered successfully");
            })
            .catch((error) => {
                console.error(
                    "could not register carrot service worker",
                    error
                );
            });
    }
}
