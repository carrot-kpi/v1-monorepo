import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { cva } from "class-variance-authority";
import { ReactComponent as CloseIcon } from "../../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../../assets/menu.svg";
import { GridPatternBg } from "../grid-pattern-bg";
import { ConnectWallet } from "../../connect-wallet";

const navWrapperStyles = cva([""], {
    variants: {
        bgColor: {
            green: ["bg-green"],
            orange: ["bg-orange"],
        },
        isOpen: {
            true: ["fixed top-0 left-0 z-10 h-screen w-full"],
        },
    },
});

const navbarStyles = cva(
    [
        "relative",
        "flex items-center justify-between",
        "px-6 py-8 md:py-11",
        "transition-all ease-in delay-75",
    ],
    {
        variants: {
            bgColor: {
                green: ["bg-green"],
                orange: ["bg-orange"],
            },
            isOpen: {
                true: ["z-10"],
            },
        },
    }
);

const navStyles = cva([], {
    variants: {
        isOpen: {
            true: ["absolute flex flex-col top-28 left-0 px-6 py-16 w-full"],
            false: ["hidden md:flex"],
        },
    },
});

const navLinksStyles = cva(["flex"], {
    variants: {
        isOpen: {
            true: ["flex-col items-start space-y-8 relative"],
            false: [
                "items-center space-x-8 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2",
            ],
        },
    },
});

interface LinkProps {
    title: string;
    to: string;
}

export interface NavbarProps {
    bgColor?: "green" | "orange";
    links?: LinkProps[];
    className?: {
        nav?: string;
    };
}

export const Navbar = ({ bgColor, links, className }: NavbarProps) => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const closeMenuOnResizeToDesktop = () => {
            if (window.innerWidth > 700) setOpen(false);
        };
        window.addEventListener("resize", closeMenuOnResizeToDesktop);
        return () => {
            window.removeEventListener("resize", closeMenuOnResizeToDesktop);
        };
    }, [isOpen]);

    return (
        <div className={navWrapperStyles({ isOpen, bgColor })}>
            {isOpen && <GridPatternBg className="md:hidden" />}
            <div
                className={navbarStyles({
                    bgColor,
                    isOpen,
                    className: className?.nav,
                })}
            >
                <NavLink to="/" onClick={() => setOpen(false)}>
                    <Logo className="w-32 h-auto md:w-[188px] text-black" />
                </NavLink>
                {links && (
                    <nav className={navStyles({ isOpen })}>
                        <ul className={navLinksStyles({ isOpen })}>
                            {links.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setOpen(false)}
                                >
                                    <li className="flex items-start space-x-2 cursor-pointer">
                                        <span className="font-mono text-2xl md:text-base">
                                            ↳
                                        </span>
                                        <p className="font-mono text-black text-2xl hover:underline md:text-base uppercase underline-offset-[12px]">
                                            {link.title}
                                        </p>
                                    </li>
                                </NavLink>
                            ))}
                        </ul>
                    </nav>
                )}
                <div
                    className={`absolute top-[420px] md:static ${
                        !isOpen && "hidden"
                    } md:block md:top-auto`}
                >
                    <ConnectWallet />
                </div>
                <div className="md:hidden" onClick={() => setOpen(!isOpen)}>
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </div>
            </div>
        </div>
    );
};
