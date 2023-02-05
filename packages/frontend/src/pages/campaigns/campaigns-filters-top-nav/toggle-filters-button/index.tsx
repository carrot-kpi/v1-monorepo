import React from "react";
import {
    ToggleIconButton,
    ToggleButtonProps,
} from "../../../../components/ui/toggle-icon-button";

export const ToggleFiltersButton = ({ toggle, active }: ToggleButtonProps) => (
    <ToggleIconButton toggle={toggle} active={active}>
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M14 17.501L10 17.501"
                stroke={active ? "white" : "black"}
                strokeLinecap="round"
            />
            <path
                d="M18 12.501L6 12.501"
                stroke={active ? "white" : "black"}
                strokeLinecap="round"
            />
            <path
                d="M21 7.50098L3 7.50097"
                stroke={active ? "white" : "black"}
                strokeLinecap="round"
            />
        </svg>
    </ToggleIconButton>
);