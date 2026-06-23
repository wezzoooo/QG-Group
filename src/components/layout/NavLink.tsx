"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    label: string;
    onClick?: () => void;
}

export default function NavLink({
    href,
    label,
    onClick,
}: NavLinkProps) {
    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            className="
                group
                relative
                text-sm
                font-medium
                uppercase
                tracking-wide
                text-white
                transition-colors
                duration-300
            "
        >
            {label}

            <span
                className={`
                    absolute
                    left-0
                    -bottom-1
                    h-px
                    bg-white
                    transition-all
                    duration-300
                    ${
                        isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                    }
                `}
            />
        </Link>
    );
}