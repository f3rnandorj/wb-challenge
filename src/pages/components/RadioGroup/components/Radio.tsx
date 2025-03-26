import { RadioContainer, RadioCircle } from "../styles";

export type RadioProps = {
  isSelected: boolean;
  onClick: () => void;
};
export function Radio({ isSelected, onClick }: RadioProps) {
  return (
    <RadioContainer isSelected={isSelected} onClick={onClick}>
      <RadioCircle isSelected={isSelected} />
    </RadioContainer>
  );
}
