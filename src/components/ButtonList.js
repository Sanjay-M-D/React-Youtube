import React from "react";
import Button from "./Button";
import { BUTTON_NAME_LIST } from "../utils/Contants";

const ButtonList = () => {
  return (
    <div className="flex w-screen overflow-x-scroll no-scrollbar">
      {BUTTON_NAME_LIST?.map((buttonName, index) => (
        <Button key={index} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
