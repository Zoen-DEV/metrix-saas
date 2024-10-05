import { RoutesEnum } from "../enums/routes.enum";

export interface INavbarRoute {
  label: string;
  path: RoutesEnum;
  icon: ({ isFocus }: { isFocus: boolean }) => React.JSX.Element;
}
