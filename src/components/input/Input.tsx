import React from "react";
import "./index.css";

type TInputProps = {
  value: string | number;
  callback: (e: string) => void;
};
export function Input({ value, callback }: TInputProps) {
  return (
    <input
      type="text"
      className="input"
      value={value}
      onChange={(e) => callback(e.target.value)}
    />
  );
}
