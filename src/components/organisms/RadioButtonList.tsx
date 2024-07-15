"use client";
import React from "react";
import styles from "@/styles/common/radioButton.module.scss";
import sectionStyles from "@/styles/common/section.module.scss";

import RadioButton from "../molecules/RadioButton";

interface IRadioButtonListProps {
  radioButtonMarked: number | null;
  onChange: (index: number) => void;
}

const RadioButtonList = (props: IRadioButtonListProps) => {
  return (
    <div className={sectionStyles.section}>
      <h2 className={sectionStyles.section__header}>BLOK PIERWSZY</h2>
      <div className={styles.radioButton}>
        <RadioButton
          label="Opcja pierwsza"
          isMarked={props.radioButtonMarked === 0}
          onChange={() => props.onChange(0)}
        />
        <RadioButton
          label="Opcja druga"
          isMarked={props.radioButtonMarked === 1}
          onChange={() => props.onChange(1)}
        />
        <RadioButton
          label="Opcja losowa"
          isMarked={props.radioButtonMarked === 2}
          onChange={() => props.onChange(2)}
        />
      </div>
    </div>
  );
};

export default RadioButtonList;
