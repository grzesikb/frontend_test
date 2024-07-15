"use client";
import React from "react";
import styles from "@/styles/common/radioButton.module.scss";

interface IRadioButtonProps {
  label: string;
  isMarked: boolean;
  onChange: () => void;
}

const RadioButton = (props: IRadioButtonProps) => {
  return (
    <label className={styles.radioButton__label}>
      <input
        type="radio"
        className={styles.radioButton__btn}
        checked={props.isMarked}
        onChange={props.onChange}
      />
      {props.label}
    </label>
  );
};

export default RadioButton;
