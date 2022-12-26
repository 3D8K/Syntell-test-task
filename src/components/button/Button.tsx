import React from "react";
import "./index.css";

type TButtonProps = {
  name: string;
  callback: () => void;
};

export function Button({ name, callback }: TButtonProps) {
  return (
    <div onClick={() => callback()} className="button">
      {name}
    </div>
  );
}
