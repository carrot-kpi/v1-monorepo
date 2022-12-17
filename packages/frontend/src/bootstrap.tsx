import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { App } from "./pages/app";
import { infuraProvider } from "wagmi/providers/infura";
import { CarrotCoreProvider } from "@carrot-kpi/react";
import { CarrotUIProvider } from "@carrot-kpi/ui";
import { SUPPORTED_CHAINS } from "./constants";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "./i18n";

import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@carrot-kpi/ui/styles.css";
import "@rainbow-me/rainbowkit/styles.css";

import "./global.css";

const INFURA_PROJECT_ID = "0ebf4dd05d6740f482938b8a80860d13";

const { connectors } = getDefaultWallets({
    appName: "Carrot KPI",
    chains: SUPPORTED_CHAINS,
});

__webpack_init_sharing__("default");

const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
    <StrictMode>
        <HashRouter>
            <CarrotCoreProvider
                supportedChains={SUPPORTED_CHAINS}
                providers={[infuraProvider({ apiKey: INFURA_PROJECT_ID })]}
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                getConnectors={connectors}
            >
                <RainbowKitProvider chains={SUPPORTED_CHAINS}>
                    <CarrotUIProvider>
                        <App />
                    </CarrotUIProvider>
                </RainbowKitProvider>
            </CarrotCoreProvider>
        </HashRouter>
    </StrictMode>
);
