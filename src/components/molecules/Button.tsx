"use client";
import React from "react";
import styles from "@/styles/common/button.module.scss";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconEnd?: JSX.Element;
}

const Button = ({
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
  iconEnd,
  ...rest
}: IButtonProps) => {
  return (
    <button
      className={`${styles.button} ${iconEnd && styles.buttonDDM}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...rest}
    >
      {children}
      {iconEnd && <span className={styles.button__iconEnd}>{iconEnd}</span>}
    </button>
  );
};

export default Button;
