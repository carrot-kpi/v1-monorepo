import { resolve } from "path";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";

export default [
    {
        input: [
            "src/components/error-boundary.ts",
            "src/components/kpi-token-creation-form.tsx",
            "src/components/kpi-token-page.tsx",
            "src/components/oracle-creation-form.tsx",
            "src/components/oracle-page.tsx",
            "src/components/template-component.tsx",
            "src/hooks/useDevMode.ts",
            "src/hooks/useERC20TokenPrice.ts",
            "src/hooks/useIPFSGatewayURL.ts",
            "src/hooks/useJSONUploader.ts",
            "src/hooks/useKPIToken.ts",
            "src/hooks/useKPITokenTemplate.ts",
            "src/hooks/useKPITokenTemplates.ts",
            "src/hooks/useKPITokens.ts",
            "src/hooks/useNativeCurrency.ts",
            "src/hooks/useOracle.ts",
            "src/hooks/useOracleTemplate.ts",
            "src/hooks/useOracleTemplates.ts",
            "src/hooks/usePagination.ts",
            "src/hooks/usePreferDecentralization.ts",
            "src/hooks/useProdMode.ts",
            "src/hooks/useResolvedKPIToken.ts",
            "src/hooks/useResolvedTemplate.ts",
            "src/hooks/useResolvedTemplates.ts",
            "src/hooks/useSetDevMode.ts",
            "src/hooks/useSetIPFSGatewayURL.ts",
            "src/hooks/useSetKPITokenTemplateBaseURL.ts",
            "src/hooks/useSetOracleTemplateBaseURL.ts",
            "src/hooks/useSetPreferDecentralization.ts",
            "src/hooks/useSetTemplatePreviewMode.ts",
            "src/hooks/useSetTheme.ts",
            "src/hooks/useTemplatePreviewMode.ts",
            "src/hooks/useTemplateModule.ts",
            "src/hooks/useTheme.ts",
            "src/hooks/useTokenLists.ts",
            "src/hooks/useWagmiPassiveHook.ts",
            "src/types/templates.ts",
            "src/types/transactions.ts",
            "src/i18n.ts",
            "src/index.ts",
        ],
        preserveSymlinks: true,
        plugins: [
            peerDepsExternal(),
            nodeResolve({ preferBuiltins: true }),
            commonjs(),
            esbuild(),
        ],
        output: [
            {
                dir: resolve("./dist/es"),
                preserveModules: true,
                preserveModulesRoot: "src",
                format: "es",
                sourcemap: true,
                entryFileNames: "[name].mjs",
            },
            {
                dir: resolve("./dist/cjs"),
                preserveModules: true,
                preserveModulesRoot: "src",
                format: "cjs",
                sourcemap: true,
                entryFileNames: "[name].cjs",
            },
        ],
    },
];
