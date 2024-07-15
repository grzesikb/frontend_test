"use client";
import React from "react";
import sectionStyles from "@/styles/common/section.module.scss";

import Button from "../molecules/Button";

interface IButtonOptionsProps {
  buttonClickReplace: () => void;
  buttonClickAdd: () => void;
}

const ButtonOptions = (props: IButtonOptionsProps) => {
  return (
    <div className={sectionStyles.section}>
      <h2 className={sectionStyles.section__header}>BLOK DRUGI</h2>
      <div className={sectionStyles.section__btnOptions}>
        <Button onClick={() => props.buttonClickReplace()}>Zastąp</Button>
        <Button onClick={() => props.buttonClickAdd()}>Doklej</Button>
      </div>
    </div>
  );
};

export default ButtonOptions;
