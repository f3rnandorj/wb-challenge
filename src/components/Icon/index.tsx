"use client";

import { useTheme, DefaultTheme } from "styled-components";
import React from "react";
import {
  Check,
  Star,
  ChevronLeft,
  X,
  ChevronUp,
  ChevronDown,
  Rocket,
} from "lucide-react";

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

const Icons = {
  goBack: ChevronLeft,
  star: Star,
  check: Check,
  close: X,
  arrowUp: ChevronUp,
  arrowDown: ChevronDown,
  rocket: Rocket,
};
