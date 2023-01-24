import React, { ChangeEventHandler, ReactNode } from "react";
import { TextMono } from "../../text-mono";
import { ReactComponent as DangerIcon } from "../../assets/danger-icon.svg";
import { ReactComponent as InfoIcon } from "../../assets/info-icon.svg";
import { ReactElement } from "react";
import { cva } from "class-variance-authority";

export interface BaseInputProps<V> extends BaseInputWrapperProps {
    error?: boolean;
    helperText?: string;
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
    placeholder?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    value?: V;
    border?: boolean;
}

export const inputStyles = cva(
    [
        "cui-rounded-xxl",
        "cui-p-3",
        "cui-font-mono",
        "cui-font-normal",
        "focus:cui-outline-none",
        "cui-placeholder-opacity-20",
        "dark:cui-placeholder-opacity-30",
        "cui-text-black",
        "dark:cui-text-white",
        "cui-box-border",
        "cui-bg-white",
        "dark:cui-bg-black",
    ],
    {
        variants: {
            error: {
                true: [
                    "cui-bg-red",
                    "cui-bg-opacity-20",
                    "dark:cui-bg-red",
                    "dark:cui-bg-opacity-20",
                ],
            },
            size: {
                xxs: ["cui-text-xxs"],
                xs: ["cui-text-xs"],
                sm: ["cui-text-sm"],
                md: ["cui-text-md"],
                lg: ["cui-text-lg"],
                xl: ["cui-text-xl"],
                xxl: ["cui-text-xxl"],
            },
            fullWidth: {
                true: ["cui-w-full"],
            },
            border: {
                true: [
                    "cui-border",
                    "cui-border-black",
                    "dark:cui-border-white",
                    "focus:cui-border-orange",
                    "dark:focus:cui-border-orange",
                    "cui-bg-transparent",
                ],
                false: [
                    "cui-border-none",
                    "cui-bg-gray-200",
                    "dark:cui-bg-gray-700",
                ],
            },
        },
        defaultVariants: {
            size: "md",
            border: true,
            fullWidth: false,
        },
    }
);

const helperTextWrapperStyles = cva([
    "cui-flex",
    "cui-items-center",
    "cui-gap-2",
    "cui-mt-2",
]);

const helperTextStyles = cva([], {
    variants: {
        error: {
            true: ["cui-text-red", "dark:cui-text-red"],
        },
    },
});

export interface BaseInputWrapperProps {
    id: string;
    label: string;
    error?: boolean;
    helperText?: string;
    className?: string;
    children?: ReactNode;
}

export const BaseInputWrapper = ({
    id,
    label,
    error,
    helperText,
    className,
    children,
}: BaseInputWrapperProps): ReactElement => (
    <div>
        {!!label && (
            <label
                className={`cui-block cui-w-fit cui-mb-2 ${className}`}
                htmlFor={id}
            >
                <TextMono size="sm" className="cui-font-medium">
                    {label}
                </TextMono>
            </label>
        )}
        {children}
        {helperText && (
            <div className={helperTextWrapperStyles({ className })}>
                {error ? (
                    <DangerIcon className="cui-stroke-red" />
                ) : (
                    <InfoIcon className="cui-stroke-black dark:cui-stroke-white" />
                )}
                <TextMono className={helperTextStyles({ error })} size="xs">
                    {helperText}
                </TextMono>
            </div>
        )}
    </div>
);
