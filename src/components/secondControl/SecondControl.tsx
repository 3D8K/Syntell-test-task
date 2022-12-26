import React from "react";
import "../firstControl/index.css";
import secondControlStore from "../../store/secondControlStore";
import { observer } from "mobx-react-lite";
import { Input } from "../input/Input";
import { Button } from "../button/Button";

const SecondControl = observer(() => {
  const { value, changeValue, alertNumber, alertText } = secondControlStore;
  return (
    <div className="cardWrapper">
      <Button name="Alert Num" callback={alertNumber} />
      <Input value={value} callback={changeValue} />
      <Button name="Alert Text" callback={alertText} />
    </div>
  );
});

export default SecondControl;
