"use client";
import React from "react";
import styles from "@/styles/common/textSection.module.scss";
import sectionStyles from "@/styles/common/section.module.scss";

interface ITextSectionProps {
  textContent: string[];
}

const TextSection = (props: ITextSectionProps) => {
  return (
    <div className={sectionStyles.section}>
      <h2 className={sectionStyles.section__header}>
        BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE...
      </h2>
      {props.textContent.map((text, index) => (
        <p key={index} className={styles.textSection}>
          {text}
        </p>
      ))}
    </div>
  );
};

export default TextSection;
