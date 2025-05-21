interface NavItem {
    label: string;
    page: string;
}

export const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Inicio",
        page: "home",
    },
    {
        label: "Sobre mi",
        page: "about",
    },
    {
        label: "Proyectos",
        page: "projects",
    },
];
