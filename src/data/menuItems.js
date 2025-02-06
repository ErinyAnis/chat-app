import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { BsChatDots } from "react-icons/bs";
import { RiKanbanView2 } from "react-icons/ri";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { FaRegFile } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";
import { MdOutlineWidgets } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMailOutline, MdOutlineDateRange } from "react-icons/md";
import { TbBoxMultiple } from "react-icons/tb";

export const iconMap = {
  AiOutlineHome,
  HiMiniArrowTrendingUp,
  BsChatDots,
  MdOutlineMailOutline,
  RiKanbanView2,
  MdOutlineDateRange,
  HiOutlineClipboardCheck,
  FaRegFile,
  HiOutlineShoppingBag,
  AiOutlineLock,
  MdOutlineWidgets,
  TbBoxMultiple,
};

export const sidebarLinks = [
  {
    mainTitle: "menu",
    links: [
      {
        title: "Dashboard",
        icon: "AiOutlineHome",
        submenu: true,
        submenuItems: [
          { title: "submenu 1" },
          { title: "submenu 2" },
          { title: "submenu 3" },
        ],
      },
      { title: "changelog", icon: "HiMiniArrowTrendingUp", num: "1.0.0" },
    ],
  },
  {
    mainTitle: "apps",
    links: [
      { title: "chat", icon: "BsChatDots", url: "/chat" },
      { title: "email", icon: "MdOutlineMailOutline" },
      { title: "kanban", icon: "RiKanbanView2" },
      { title: "calender", icon: "MdOutlineDateRange" },
      { title: "todo", icon: "HiOutlineClipboardCheck" },
      {
        title: "projects",
        submenu: true,
        submenuItems: [
          { title: "submenu 1" },
          { title: "submenu 2" },
          { title: "submenu 3" },
        ],
        icon: "FaRegFile",
      },
      {
        title: "e-commerce",
        icon: "HiOutlineShoppingBag",
        submenu: true,
        submenuItems: [
          { title: "submenu 1" },
          { title: "submenu 2" },
          { title: "submenu 3" },
        ],
      },
    ],
  },
  {
    mainTitle: "pages",
    links: [
      {
        title: "authentication",
        icon: "AiOutlineLock",
        submenu: true,
        submenuItems: [
          { title: "submenu 1" },
          { title: "submenu 2" },
          { title: "submenu 3" },
        ],
      },
      {
        title: "utility",
        icon: "RiKanbanView2",
        submenu: true,
        submenuItems: [
          { title: "submenu 1" },
          { title: "submenu 2" },
          { title: "submenu 3" },
        ],
      },
    ],
  },
  {
    mainTitle: "elements",
    links: [
      {
        title: "widgets",
        icon: "MdOutlineWidgets",
        submenu: true,
        submenuItems: [
          { title: "submenu 1" },
          { title: "submenu 2" },
          { title: "submenu 3" },
        ],
      },
      {
        title: "components",
        icon: "TbBoxMultiple",
        submenu: true,
        submenuItems: [
          { title: "submenu 1" },
          { title: "submenu 2" },
          { title: "submenu 3" },
        ],
      },
    ],
  },
];
