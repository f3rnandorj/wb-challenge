import { useTheme, DefaultTheme } from "styled-components";
import React, { ComponentType } from "react";
import {
  Check,
  Star,
  ChevronLeft,
  X,
  ChevronUp,
  ChevronDown,
  Rocket,
} from "lucide-react";

import AMEX from "../../assets/creditCards/AMEX.svg";
import dinners from "../../assets/creditCards/dinnersclub.svg";
import elo from "../../assets/creditCards/elo.svg";
import mastercard from "../../assets/creditCards/mastercard.svg";
import visa from "../../assets/creditCards/visa.svg";
import { CardBrand } from "@/utils";

export type IconName = keyof typeof Icons;

export interface IconProps {
  name: IconName;
  size?: number;
  color?: keyof DefaultTheme["colors"];
  onClick?: () => void;
  style?: React.CSSProperties | undefined;
}

export function Icon({
  name,
  size = 22,
  color = "primary",
  onClick,
  style,
}: IconProps) {
  const { colors } = useTheme();
  const SelectedIcon = Icons[name];
  const iconColor = colors[color];

  return (
    <SelectedIcon
      size={size}
      color={iconColor}
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
        ...style,
      }}
    />
  );
}

type IconsBase = {
  [key in CardBrand]: ComponentType<any>;
};
interface IconsExtended extends IconsBase {
  [key: string]: ComponentType<any>;
}

const Icons: IconsExtended = {
  goBack: ChevronLeft,
  star: Star,
  check: Check,
  close: X,
  arrowUp: ChevronUp,
  arrowDown: ChevronDown,
  rocket: Rocket,
  AMEX,
  dinners,
  elo,
  mastercard,
  visa,
};
