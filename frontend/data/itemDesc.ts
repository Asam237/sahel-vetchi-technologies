import { ItemDesc } from "../types";
import { Control, Management, Sale } from "./icons";

export const itemsDesc: ItemDesc[] = [
    {
        title: "Complete inventory management",
        description: "Manage all your products in one central place. Stock&Buy offers a rich set of features to capture each and every details about your products.",
        picture: Management,
        items: ["Manage simple and variable products", "Inbound and outbound inventory tracking", "Native support for Bundles (kits)"],
        myswitch: true,
    },
    {
        title: "Complete inventory management",
        description: "Manage all your products in one central place. Stock&Buy offers a rich set of features to capture each and every details about your products.",
        picture: Control,
        items: ["Manage simple and variable products", "Inbound and outbound inventory tracking", "Native support for Bundles (kits)"],
        myswitch: false,
    },
    {
        title: "Complete inventory management",
        description: "Manage all your products in one central place. Stock&Buy offers a rich set of features to capture each and every details about your products.",
        picture: Sale,
        items: ["Manage simple and variable products", "Inbound and outbound inventory tracking", "Native support for Bundles (kits)"],
        myswitch: true,
    },
]