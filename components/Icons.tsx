import type { ComponentProps } from "react";
type IconProps = ComponentProps<"svg"> & { size?: number };
const shapes = {
  Sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
    </>
  ),
  Moon: <path d="M20.5 14.2A9 9 0 0 1 9.8 3.5 9 9 0 1 0 20.5 14.2Z" />,
  ArrowUpRight: <path d="M6 18 18 6M6 6h12v12" />,
  ArrowRight: <path d="M4 12h15m-6-6 6 6-6 6" />,
  ArrowLeft: <path d="M20 12H5m6-6-6 6 6 6" />,
  MoveDown: <path d="M12 3v17m-6-6 6 6 6-6" />,
  ChevronRight: <path d="m9 5 7 7-7 7" />,
  ChevronDown: <path d="m5 9 7 7 7-7" />,
  ChevronUp: <path d="m5 15 7-7 7 7" />,
  Check: <path d="m4 12 5 5L20 6" />,
  CheckCircle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m7 12 3 3 7-7" />
    </>
  ),
  Plus: <path d="M5 12h14M12 5v14" />,
  Minus: <path d="M5 12h14" />,
  X: <path d="m6 6 12 12M18 6 6 18" />,
  Menu: <path d="M4 6h16M4 12h12M4 18h16" />,
  ShoppingBag: (
    <>
      <path d="M5 8h14l2 13H3L5 8Z" />
      <path d="M8 9V6a4 4 0 0 1 8 0v3M8 14h8" />
    </>
  ),
  Trash2: (
    <>
      <path d="M4 6h16M8 6V3h8v3M6 6l1 15h10l1-15M10 10v7M14 10v7" />
    </>
  ),
  Search: (
    <>
      <circle cx="10" cy="10" r="6.5" />
      <path d="m15 15 6 6" />
    </>
  ),
  Mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 6 9 8 9-8" />
    </>
  ),
  Phone: (
    <path d="m7 3 3 5-3 3c1.5 3 3 4.5 6 6l3-3 5 3-1 4C10 23 1 14 3 4l4-1Z" />
  ),
  MapPin: (
    <>
      <path d="M12 22s8-7.5 8-13a8 8 0 0 0-16 0c0 5.5 8 13 8 13Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  Ruler: (
    <>
      <path d="m3 16 13-13 5 5L8 21l-5-5Z" />
      <path d="m8 11 2 2m2-6 2 2m2-6 2 2" />
    </>
  ),
  Layers: (
    <>
      <path d="m3 8 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5m-18 5 9 5 9-5" />
    </>
  ),
  Lightbulb: (
    <>
      <path d="M8 16c0-3-3-3-3-7a7 7 0 0 1 14 0c0 4-3 4-3 7H8Zm0 3h8m-6 3h4" />
    </>
  ),
  Box: (
    <>
      <path d="m3 7 9-4 9 4v10l-9 4-9-4V7Zm0 0 9 4 9-4m-9 4v10M8 5l9 4" />
    </>
  ),
};
function makeIcon(name: keyof typeof shapes) {
  return function Icon({ size = 24, children, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden={props["aria-label"] ? undefined : true}
        {...props}
      >
        {shapes[name]}
        {children}
      </svg>
    );
  };
}
export const ArrowUpRight = makeIcon("ArrowUpRight");
export const Sun = makeIcon("Sun");
export const Moon = makeIcon("Moon");
export const ArrowRight = makeIcon("ArrowRight");
export const ArrowLeft = makeIcon("ArrowLeft");
export const MoveDown = makeIcon("MoveDown");
export const ChevronRight = makeIcon("ChevronRight");
export const ChevronDown = makeIcon("ChevronDown");
export const ChevronUp = makeIcon("ChevronUp");
export const Check = makeIcon("Check");
export const CheckCircle = makeIcon("CheckCircle");
export const Plus = makeIcon("Plus");
export const Minus = makeIcon("Minus");
export const X = makeIcon("X");
export const Menu = makeIcon("Menu");
export const ShoppingBag = makeIcon("ShoppingBag");
export const Trash2 = makeIcon("Trash2");
export const Search = makeIcon("Search");
export const Mail = makeIcon("Mail");
export const Phone = makeIcon("Phone");
export const MapPin = makeIcon("MapPin");
export const Ruler = makeIcon("Ruler");
export const Layers = makeIcon("Layers");
export const Lightbulb = makeIcon("Lightbulb");
export const Box = makeIcon("Box");
export const CheckIcon = Check;
export const XIcon = X;
export const ChevronDownIcon = ChevronDown;
export const ChevronUpIcon = ChevronUp;
