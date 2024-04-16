import { IconType } from "react-icons";
import { ComponentType } from "react";

export type NavItem = {
  type: "item";
  title: string;
  Icon: IconType | ComponentType;
  href: string;
};
export type NavGroup = {
  type: "group";
  title: string;
  items: NavItem[];
};
export type NavElement = NavItem | NavGroup;
