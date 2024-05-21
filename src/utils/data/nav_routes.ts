import NavbarOrdersIcon from "@/assets/utils/navbar/getOrdersIcon";
import NavbarHomeIcon from "../../assets/utils/navbar/getHomeIcon";
import { RoutesEnum } from "../enums/routes.enum";
import { INavbarRoute } from "../interfaces/nav_routes";
import NavbarCustomersIcon from "@/assets/utils/navbar/getCustomersIcon";
import NavbarInventoryIcon from "@/assets/utils/navbar/getInventoryIcon";
import NavbarConversationIcon from "@/assets/utils/navbar/getConversationIcon";
import NavbarSettingsIcon from "@/assets/utils/navbar/getSettingsIcon";

export const NavbarRoutes: INavbarRoute[] = [
  {
    label: "Dashboard",
    path: RoutesEnum.main,
    icon: NavbarHomeIcon,
  },
  {
    label: "Orders",
    path: RoutesEnum.orders,
    icon: NavbarOrdersIcon,
  },
  {
    label: "Customers",
    path: RoutesEnum.customers,
    icon: NavbarCustomersIcon,
  },
  {
    label: "Inventory",
    path: RoutesEnum.inventory,
    icon: NavbarInventoryIcon,
  },
  {
    label: "Conversation",
    path: RoutesEnum.conversation,
    icon: NavbarConversationIcon,
  },
  {
    label: "Settings",
    path: RoutesEnum.settings,
    icon: NavbarSettingsIcon,
  },
];
