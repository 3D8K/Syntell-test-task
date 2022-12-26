import React from "react";
import "./index.css";
import autoCompleteStore from "../../store/autoCompleteStore";
import { observer } from "mobx-react-lite";
import { CountryInfo } from "../../api/apiService";
import { Input } from "../input/Input";
import { Button } from "../button/Button";

const AutoCompleteControl = observer(() => {
  const { value, mode, clues, changeValue, changeMode } = autoCompleteStore;
  let tooltips: Array<CountryInfo> = [...clues];
  if (!mode && clues.length > 3) tooltips = [...clues.slice(0, 3)];
  if (mode && clues.length > 10) tooltips = [...clues.slice(0, 10)];
  return (
    <div className="cardWrapper" style={{ flexDirection: "row" }}>
      <Button name="3 Clues" callback={() => changeMode(false)} />
      <div style={{ display: "flex", flexDirection: "column", margin: "auto" }}>
        <Input value={value} callback={changeValue} />
        {clues.length > 0 && (
          <div className="resultWrapper">
            {tooltips.map((item, index) => {
              return (
                <div
                  key={index + item.name}
                  className="cluesListElement"
                  style={{ padding: "5px" }}
                  onClick={() => {
                    changeValue(item.name);
                  }}
                >
                  <img
                    alt={item.fullName}
                    src={item.flag}
                    className="h-6 my-auto"
                  />
                  {`${item.name} (${item.fullName})`}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Button name="10 Clues" callback={() => changeMode(true)} />
    </div>
  );
});

export default AutoCompleteControl;
