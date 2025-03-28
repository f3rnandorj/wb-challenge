import { Icon } from "../../Icon";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import { useTheme } from "styled-components";

interface Props {
  goBackFn?: () => void;
}

export function MainHeader({ goBackFn }: Props) {
  const { spacing } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {goBackFn ? (
        <Icon name="goBack" onClick={goBackFn} />
      ) : (
        <div style={{ width: spacing.s20 }} />
      )}

      <Image alt="logo" src={logo} width={42} height={30} />

      <div style={{ width: spacing.s20 }} />
    </div>
  );
}
