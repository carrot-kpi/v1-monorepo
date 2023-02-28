import React, {
    forwardRef,
    useRef,
    useState,
    useCallback,
    useEffect,
} from "react";
import { ReactElement } from "react";
import { BaseInputProps } from "../commons";
import { Dayjs } from "dayjs";
import { TextInput } from "../text";
import { Popover } from "../../utils";
import { ReactComponent as Calendar } from "../../../assets/calendar.svg";
import { DatePicker, DatePickerProps } from "./picker";

export type DateInputProps = Omit<
    BaseInputProps<Dayjs>,
    "onChange" | "min" | "max"
> &
    DatePickerProps;

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
    function DateInput(
        {
            id,
            label,
            helperText,
            error = false,
            variant,
            border,
            className,
            value,
            onChange,
            min,
            max,
            ...rest
        },
        ref
    ): ReactElement {
        const [anchorEl, setAnchorEl] = useState<HTMLInputElement | null>(null);
        const popoverRef = useRef<HTMLDivElement>(null);
        const [open, setOpen] = useState(false);

        useEffect(() => {
            const handleCloseOnClick = (event: MouseEvent) => {
                if (
                    !!popoverRef.current &&
                    !popoverRef.current.contains(event.target as Node)
                )
                    setOpen(false);
            };
            document.addEventListener("mousedown", handleCloseOnClick);
            return () => {
                document.removeEventListener("mousedown", handleCloseOnClick);
            };
        }, []);

        const handlePickerOpen = useCallback(() => {
            setOpen(true);
        }, []);

        const handleChange = useCallback(
            (value: Dayjs) => {
                if (onChange) onChange(value);
                setOpen(false);
            },
            [onChange]
        );

        return (
            <>
                <TextInput
                    ref={(element) => {
                        if (ref) {
                            if (typeof ref === "function") ref(element);
                            else ref.current = element;
                        }
                        setAnchorEl(element);
                    }}
                    id={id}
                    label={label}
                    error={error}
                    variant={variant}
                    border={border}
                    helperText={helperText}
                    icon={Calendar}
                    className={{
                        input: "cui-cursor-pointer cui-caret-transparent",
                        inputIconWrapper: "cui-cursor-pointer",
                        ...className,
                    }}
                    {...rest}
                    onClick={handlePickerOpen}
                    value={value?.format("L")}
                />
                <Popover
                    anchor={anchorEl}
                    ref={popoverRef}
                    open={open}
                    placement="bottom-start"
                    className={{
                        root: "cui-p-3 cui-flex cui-flex-col cui-gap-3",
                    }}
                >
                    <DatePicker
                        onChange={handleChange}
                        value={value}
                        min={min}
                        max={max}
                    />
                </Popover>
            </>
        );
    }
);
