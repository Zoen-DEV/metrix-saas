import NavbarOrdersIcon from "@/assets/utils/navbar/getOrdersIcon";
import NavbarHomeIcon from "../../assets/utils/navbar/getHomeIcon";
import { RoutesEnum } from "../enums/routes.enum";
import { INavbarRoute } from "../interfaces/nav_routes.interface";
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
    label: "Finance",
    path: RoutesEnum.finance,
    icon: NavbarOrdersIcon,
  },
  {
    label: "Tasks",
    path: RoutesEnum.tasks,
    icon: NavbarCustomersIcon,
  },
  {
    label: "Calendar",
    path: RoutesEnum.calendar,
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
