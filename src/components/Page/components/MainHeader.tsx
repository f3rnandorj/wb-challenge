import { Icon } from "../../Icon";
import Image from "next/image";
import logo from "../../../assets/logo.png";

interface Props {
  canGoBack: boolean;
}

export function MainHeader({ canGoBack }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {canGoBack ? (
        <Icon name="goBack" onClick={() => console.log("clicou")} />
      ) : (
        <div />
      )}

      <Image
        alt="logo"
        src={logo}
        width={32}
        height={30}
        style={{ width: 32, height: 30 }}
      />

      <div />
    </div>
  );
}
