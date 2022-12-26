import React from "react";
import firstControlStore from "../../store/firstControlStore";
import { observer } from "mobx-react-lite";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import "./index.css";

const FirstControl = observer(() => {
  const { value, changeValue } = firstControlStore;
  return (
    <div className="cardWrapper">
      <Input value={value} callback={changeValue} />
      <div className="buttonWrapper">
        <Button name="Clear" callback={() => changeValue("")} />
        <Button
          name="Hello world!"
          callback={() => changeValue("Hello World!")}
        />
      </div>
    </div>
  );
});

export default FirstControl;
