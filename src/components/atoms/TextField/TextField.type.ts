import { ChangeEventHandler } from "react";

export interface TextFieldProps {
  icon?: React.ReactNode;
  label?: string;
  type: 'text' | 'number' | 'email' | 'password';
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
