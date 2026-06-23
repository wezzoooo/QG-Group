import Image from "next/image";

interface LogoProps {
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
}

export default function LogoIcon({
    width = 40, 
    height = 40,
    className = "",
    priority = false,
}: LogoProps) {
    return (
        <Image
            src="/logos/logo-icon.png"
            alt="قريطنة جروب"
            width={width} 
            height={height} 
            className={`object-contain ${className}`}
            priority={priority}
        />
    );
}