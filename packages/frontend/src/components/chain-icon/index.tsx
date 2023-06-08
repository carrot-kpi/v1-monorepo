import { cva } from "class-variance-authority";
import React, { type ReactNode } from "react";

const rootStyles = cva([
    "flex",
    "items-center",
    "justify-center",
    "w-8",
    "h-8",
    "rounded-lg",
]);

interface ChainIconProps {
    backgroundColor: string;
    logo: ReactNode;
    className?: string;
}

export const ChainIcon = ({
    backgroundColor,
    logo,
    className,
}: ChainIconProps) => {
    return (
        <div className={rootStyles({ className })} style={{ backgroundColor }}>
            <div className="flex items-center justify-center">{logo}</div>
        </div>
    );
};
