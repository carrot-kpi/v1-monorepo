import React from "react";
import { Popover, Typography } from "@carrot-kpi/ui";
import { forwardRef } from "react";
import { useConnect, useNetwork } from "wagmi";
import { getConnectorIcon, ReadonlyConnector } from "../../connectors";

interface ConnectPopoverProps {
    open: boolean;
    onClose: () => void;
    anchor?: HTMLElement | null;
}

export const ConnectPopover = forwardRef<HTMLDivElement, ConnectPopoverProps>(
    function ConnectPopover({ open, anchor, onClose }, ref) {
        const { chain } = useNetwork();
        const { connectors, connect } = useConnect();

        return (
            <Popover
                placement="bottom"
                open={open}
                anchor={anchor}
                ref={ref}
                className={{ root: "px-6 py-7 flex flex-col gap-4" }}
            >
                {connectors.map((connector) => {
                    if (
                        connector instanceof ReadonlyConnector ||
                        !connector.ready
                    )
                        return null;
                    const Logo = getConnectorIcon(connector.id);
                    return (
                        <div
                            data-testid={`${connector.id}-wallet-button`}
                            key={connector.id}
                            className="flex gap-4 cursor-pointer"
                            onClick={() => {
                                connect({ connector, chainId: chain?.id });
                                onClose();
                            }}
                        >
                            {!!Logo && <Logo width={28} height={28} />}
                            <Typography>{connector.name}</Typography>
                        </div>
                    );
                })}
            </Popover>
        );
    },
);