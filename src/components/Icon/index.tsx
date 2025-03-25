"use client";

import { useTheme, DefaultTheme } from "styled-components";
import React from "react";
import { Check, Star, ChevronLeft } from "lucide-react";

export type IconName = keyof typeof Icons;

export interface IconProps {
  name: IconName;
  size?: number;
  color?: keyof DefaultTheme["colors"];
  onClick?: () => void;
}

export function Icon({
  name,
  size = 22,
  color = "primary",
  onClick,
}: IconProps) {
  const { colors } = useTheme();
  const SelectedIcon = Icons[name];
  const iconColor = colors[color];

  return (
    <SelectedIcon
      size={size}
      color={iconColor}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
}

const Icons = {
  goBack: ChevronLeft,
  star: Star,
  check: Check,
};
