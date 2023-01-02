import { InputWrapper, Label, NameInput } from "./Input01.styles";

interface IProps {
  type: "text" | "password";
  title: string;
}

export default function Input01(props: IProps) {
  return (
    <InputWrapper>
      <Label>{props.title}</Label>
      <NameInput type={props.type} />
    </InputWrapper>
  );
}