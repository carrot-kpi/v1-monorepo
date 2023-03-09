import React, { forwardRef, useId } from "react";
import { ReactElement } from "react";
import { BaseInputProps } from "../commons";
import { inputStyles, BaseInputWrapper } from "../commons";

export type TextInputProps = Omit<BaseInputProps<string>, "id"> & {
    id?: string;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
    function TextInput(
        {
            id,
            label,
            variant,
            border,
            errorText,
            info,
            icon,
            iconPlacement,
            action,
            actionPlacement,
            error = false,
            className,
            value,
            ...rest
        },
        ref
    ): ReactElement {
        const generatedId = useId();

        const resolvedId = id || generatedId;

        return (
            <BaseInputWrapper
                id={resolvedId}
                label={label}
                error={error}
                errorText={errorText}
                info={info}
                icon={icon}
                iconPlacement={iconPlacement}
                action={action}
                actionPlacement={actionPlacement}
                className={className}
            >
                <input
                    id={resolvedId}
                    type="text"
                    ref={ref}
                    value={value || ""}
                    {...rest}
                    className={inputStyles({
                        error,
                        variant,
                        border,
                        hasLeftIcon: !!icon && iconPlacement === "left",
                        className: className?.input,
                    })}
                />
            </BaseInputWrapper>
        );
    }
);
