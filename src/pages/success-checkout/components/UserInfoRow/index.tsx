import { Text } from "@/components";
import { InfoRowContainer } from "./styles";

export interface InfoRowProps {
  label: string;
  value: string;
}

export function UserInfoRow({ label, value }: InfoRowProps) {
  return (
    <InfoRowContainer>
      <Text preset="body2" color="placeholder">
        {label}
      </Text>
      <Text preset="body2" color="title">
        {value}
      </Text>
    </InfoRowContainer>
  );
}
