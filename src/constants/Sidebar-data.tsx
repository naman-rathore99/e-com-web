import { BsDisplay } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaTachometerAlt } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdPassword } from "react-icons/md";

const SidebarItems = [
    {
        name: "Dashbaord",
        link: "/dashobard",
        icon:<FaTachometerAlt/>
    },
    {
        name: "account",
        link: "dashboard/account",
        icon:<CgProfile />

    },
    {
        name: "Notification",
        link: "dashboard/notification",
        icon:<IoNotificationsOutline />

    },
    {
        name: "password",
        link: "dashboard/password",
        icon:<MdPassword />

    },
    {
        name: "Preferences",
        link: "dashbaord/preferences",
        icon:<BsDisplay />

    },
    // {
    //     name: "Sport",
    //     link: "collections/sport",
    // },
    // {
    //     name: "Groceries",
    //     link: "collections/groceries",
    // },
    // {
    //     name: "Fashion",
    //     link: "collections/fashion",
    // },
];
export default SidebarItems;