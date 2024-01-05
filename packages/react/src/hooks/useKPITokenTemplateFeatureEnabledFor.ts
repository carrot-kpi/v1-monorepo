import { type Address } from "wagmi";
import { useTemplateFeatureEnabledFor } from "./useTemplateFeatureEnabledFor copy";

interface KPITokenTemplateFeatureEnabledForParams {
    templateId?: number;
    featureId?: number;
    account?: Address;
}

export function useKPITokenTemplateFeatureEnabledFor(
    params?: KPITokenTemplateFeatureEnabledForParams,
): {
    loading: boolean;
    allowed: boolean;
} {
    return useTemplateFeatureEnabledFor({
        ...params,
        type: "kpiToken",
    });
}
