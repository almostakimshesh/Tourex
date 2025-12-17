
interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}

const menu_data: MenuItem[] = [
    {
        id: 1,
        title: "Home",
        link: "/",
        has_dropdown: false,
    },
    {
        id: 2,
        title: "Features",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/hotel-grid", title: "Hotel Grid" },
            { link: "/tour-grid-1", title: "Tour Grid One" },
            { link: "/tour-grid-2", title: "Tour Grid Two" },
            { link: "/map-listing", title: "Hotel Listing" },
            { link: "/tour-details", title: "Tour Details One" },
            { link: "/tour-details-2", title: "Tour Details Two" },
        ],
    },
    {
        id: 3,
        title: "Pages",
        link: "#",
        has_dropdown: true,
        sub_menus: [
            { link: "/wishlist", title: "Wishlist" },
            { link: "/checkout", title: "Checkout" },
            { link: "/login", title: "Log In" },
            { link: "/register", title: "Register" },
            { link: "/no-found", title: "Error" },
        ],
    },
];

export default menu_data;