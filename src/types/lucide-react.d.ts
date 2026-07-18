declare module "lucide-react" {
  import type { ComponentType, SVGProps } from "react";

  type IconProps = SVGProps<SVGSVGElement> & {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
  };

  export type LucideIcon = ComponentType<IconProps>;

  export const ChevronDown: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const BadgePercent: LucideIcon;
  export const Smartphone: LucideIcon;
  export const WalletCards: LucideIcon;
  export const ArrowUp: LucideIcon;
  export const CircleHelp: LucideIcon;
  export const Landmark: LucideIcon;
  export const PiggyBank: LucideIcon;
  export const SquareArrowOutUpRight: LucideIcon;
  export const Wallet: LucideIcon;
  export const Menu: LucideIcon;
  export const Search: LucideIcon;
  export const X: LucideIcon;
  export const Lock: LucideIcon;
  export const HandCoins: LucideIcon;
  export const Info: LucideIcon;
}
