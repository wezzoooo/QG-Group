export interface MegaMenuItem {
    title: string;
    description: string;
    href: string;
    image?: string;
}

export interface NavigationItem {
    label: string;
    href?: string;
    megaMenu?: MegaMenuItem[];
}