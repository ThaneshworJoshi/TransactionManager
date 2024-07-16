import { ChangeEventHandler } from "react";

export interface TextFieldProps {
  icon?: React.ReactNode;
  name: string;
  label?: string;
  type: 'text' | 'number' | 'email' | 'password';
  placeholder?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  error?: string;
}
