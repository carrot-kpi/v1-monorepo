import { CARROT_KPI_FRONTEND_I18N_NAMESPACE } from "../../constants";

export const en = {
    [CARROT_KPI_FRONTEND_I18N_NAMESPACE]: {
        "stagingMode.warning":
            "This is the staging version of Carrot; templates will be loaded from staging URLs. Please be careful as they are not controlled by the Carrot team.",
        "video.notSupported": "The browser doesn't support the video tag.",
        "connect.wallet": "Connect wallet",
        "connect.wallet.unknown": "Unknown",
        "connect.wallet.network": "Network",
        "network.switch.disabled.title": "Chain changed.",
        "network.switch.disabled.description.creationForm.templateExistsOnTargetChain.1":
            "Carrot templates are chain specific, and by switching chain you will lose all of the form data.",
        "network.switch.disabled.description.creationForm.templateExistsOnTargetChain.2":
            "Switch back to {{chainName}} to continue using the form or use the buttons below to either close the template or confirm the network switch.",
        "network.switch.disabled.close": "Close",
        "network.switch.disabled.switch": "Continue to {{chainName}}",
        "wrong.network.title": "Wrong network",
        "wrong.network.description":
            "In order to view this page please switch to {{chainName}} in your connected wallet to continue.",
        "home.createKPIToken": "Create KPI token",
        "home.noFeatured.title": "Reach your goals with a Carrot",
        "home.noFeatured.description":
            "Easy and powerful tool to create conditional tokens allowing an effective method to achieve any goal desirable using permissionless, decentralized technologies.",
        "home.loading": "Loading",
        "home.viewCampaign": "View",
        "home.noKPIToken": "No KPI token",
        "home.featuredCampaigns": "Featured campaigns",
        "home.templates": "Templates",
        "home.latestCampaigns": "Latest Campaigns",
        "home.allCampaigns": "View all campaigns",
        "create.campaign": "Create campaign",
        "create.loading": "Loading",
        "create.template.title": "Title",
        "create.template.version": "Version",
        "create.template.id": "ID",
        "create.template.description": "Description",
        "create.template.use": "Use",
        "create.noKPIToken": "No KPI token",
        "campaign.loading": "Loading",
        "campaign.all": "All Campaigns",
        "templates.viewAll": "View all",
        "preferences.title": "Interface settings",
        "preferences.theme": "Dark theme",
        "preferences.decentralization": "Decentralization mode",
        "preferences.decentralization.info":
            "Decentralization mode tries to route all calls to decentralized options. Onchain calls will be made directly to the targeted blockchain and IPFS data will always be sourced from IPFS directly.\n\nTo get the maximum out of the option, specify your custom RPC and IPFS node URLs below to make Carrot unstoppable.",
        "preferences.stagingMode": "Staging mode",
        "preferences.stagingMode.info":
            "Staging mode loads template frontends from a developer-specified URL instead of loading the official on-chain registered frontend from IPFS.\n\nDisable the option if you want to test the (stabler) on-chain templates as opposed to the bleeding edge version of each template.",
        loading: "Loading",
        search: "Search...",
        "coming.soon.dark.theme": "Dark theme coming soon",
        "theme.light": "Light",
        "theme.dark": "Dark",
        "theme.system": "System",
        "empty.title": "Empty space",
        "empty.description": "No data found. Please try again later.",
        "transactions.erc20.approval.data":
            "Approved {{amount}} {{symbol}} to {{spender}}",
        "transactions.erc20.approval": "Approved ERC20 token to {{spender}}",
        "transactions.kpi.token.redeem": "Redeemed on {{address}}",
        "transactions.kpi.token.erc20.recover":
            "Recovered ERC20 collateral to {{receiver}}",
        "transactions.kpi.token.erc20.recover.data":
            "Recovered {{symbol}} to {{receiver}}",
        "transactions.kpi.token.create": "Created KPI token {{address}}",
        "transactions.oracle.finalize": "Finalized oracle {{address}}",
        "activity.recent": "Recent activity",
        "orderingOptions.newest": "Newest",
        "orderingOptions.oldest": "Oldest",
        "stateOptions.all": "All",
        "stateOptions.active": "Active",
        "stateOptions.expired": "Expired",
        "stateOptions.finalized": "Finalized",
        "sideFilters.oracles": "Oracles",
        "sideFilters.templates": "Templates",
        "sideFilters.close": "Close filters",
        "error.initializing.creation.title": "Something went wrong",
        "error.initializing.creation.description":
            "Error while bootstrapping the KPI token creation form, please try again later.",
        "error.initializing.page.title": "Something went wrong",
        "error.initializing.page.description":
            "Error while bootstrapping the KPI token campaign page, please try again later.",
        "authenticate.title": "Welcome to Carrot",
        "authenticate.summary":
            "In order to create campaigns it's necessary to sign a message. This request will not trigger a blockchain transaction or cost you any fees.",
        "authenticate.cancel": "Cancel",
        "authenticate.sign": "Sign message",
        "wallet.disconnected.title": "Wallet disconnected",
        "wallet.disconnected.description":
            "A connected wallet is required to continue.",
    },
} as const;
