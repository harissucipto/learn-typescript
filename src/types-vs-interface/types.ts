type InputType = "text" | "email";

type ChangeType = (newValue: string) => void;

type ValueType = string;

// inteface dont support shorthand property

export interface InputPropsTypes {
  type: InputType;
  value: ValueType;
  onChange: ChangeType;
}

/**
 * Why Using type
 *  - Union
 *  - intersections (&)
 *  - Primitve
 *  - Shorthand Functions
 *  - Advanced Type Function
 */
