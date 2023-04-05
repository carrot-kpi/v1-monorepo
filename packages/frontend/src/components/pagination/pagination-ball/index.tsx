import { cva } from "class-variance-authority";
import React, { MouseEventHandler, ReactNode } from "react";

const paginationBallStyles = cva(
    ["flex items-center justify-center", " w-12 h-12", "rounded-full"],
    {
        variants: {
            isActive: {
                true: "bg-green text-gray-800",
                false: "bg-gray-200",
            },
            isClickable: {
                true: "cursor-pointer hover:bg-green",
            },
        },
    }
);

export const PaginationBall = ({
    number,
    onClick,
    currentPage,
    children,
}: {
    number?: number;
    onClick?: MouseEventHandler<HTMLDivElement>;
    currentPage?: number;
    children?: ReactNode;
}) => {
    const isActive = Number(number) === currentPage;
    const isClickable = !!onClick;
    return (
        <div
            onClick={onClick}
            className={paginationBallStyles({ isActive, isClickable })}
        >
            {children ? children : number}
        </div>
    );
};