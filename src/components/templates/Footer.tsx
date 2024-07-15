"use client";
import React, { useState } from "react";
import styles from "@/styles/footer.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { setReset, setShowPersonalInfo } from "@/redux/settingsSlice";
import { RootState } from "@/redux/store";

import Button from "../molecules/Button";

const Footer = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isShowPersonalInfo = useSelector(
    (state: RootState) => state.settings.isShowPersonalInfo
  );
  const reset = useSelector((state: RootState) => state.settings.reset);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const removeDropdown = () => {
    setShowDropdown(false);
  };
  const handleShowPersonalInfo = async () => {
    dispatch(setShowPersonalInfo(!isShowPersonalInfo));
    setShowDropdown(false);
  };

  const handleReset = async () => {
    dispatch(setReset(!reset));
    setShowDropdown(false);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__cssisawesome}>
        Css <br /> is awesome
      </div>
      <div className={styles.footer__nabthat}>nabthat</div>
      <Button
        onMouseEnter={toggleDropdown}
        onMouseLeave={removeDropdown}
        iconEnd={
          <>
            {showDropdown ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                width="30px"
                viewBox="0 0 24 24"
                fill="#a2a8b8"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                width="30px"
                viewBox="0 -960 960 960"
                fill="#a2a8b8"
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
              </svg>
            )}
          </>
        }
      >
        Pokaż
      </Button>

      <div className={styles.dropdown}>
        <ul className={styles.dropdown__list}>
          <li className={styles.dropdown__item} onClick={handleReset}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
            ZRESETUJ USTAWIENIA
          </li>
          <li
            className={styles.dropdown__item}
            onClick={handleShowPersonalInfo}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="currentColor"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
            POKAŻ DANE OSOBOWE
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
