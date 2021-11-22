// inteface dont support shorthand property because dont have body

export interface IInputProps {
  type: "text" | "email";
  value: string;
  onChange: (newValue: string) => void;
}

/**
 * Declaration Merging
 * Familirarity (extends)
 */
