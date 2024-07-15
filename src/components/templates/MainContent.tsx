"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/mainContent.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import RadioButtonList from "../organisms/RadioButtonList";
import ButtonOptions from "../organisms/ButtonOptions";
import TextSection from "../organisms/TextSection";

import useLocalStorage from "@/hooks/useLocalStorage";
import { setReset } from "@/redux/settingsSlice";

interface IMainContentProps {
  initialData: string[];
}

const MainContent = ({ initialData }: IMainContentProps) => {
  const [radioButtonMarked, setRadioButtonMarked] = useState<number | null>(
    null
  );

  const isReset = useSelector((state: RootState) => state.settings.reset);
  const dispatch = useDispatch();

  const [textContent, setTextContent, removeLocalStorage] = useLocalStorage<
    string[]
  >("textContent", []);
  const [jsonData, setJsonData] = useLocalStorage<string[]>(
    "jsonData",
    initialData
  );

  useEffect(() => {
    if (jsonData.length === 0) {
      setJsonData(initialData);
    }
  }, [initialData, jsonData, setJsonData]);

  useEffect(() => {
    if (isReset) {
      setTextContent([]);
      removeLocalStorage();
      setRadioButtonMarked(null);
      dispatch(setReset(false));
    }
  }, [isReset, removeLocalStorage]);

  const handleRadioButtonChange = (index: number) => {
    setRadioButtonMarked(index);
  };

  const handleAddButtonClick = () => {
    if (radioButtonMarked !== null) {
      let newText = "";
      if (radioButtonMarked === 0) {
        newText = jsonData[0];
      } else if (radioButtonMarked === 1) {
        newText = jsonData[1];
      } else {
        const randomIndex = Math.floor(Math.random() * jsonData.length);
        newText = jsonData[randomIndex];
      }

      if (!isTextAlreadyUsed(newText)) {
        const updatedContent = [...textContent, newText].sort();
        setTextContent(updatedContent);
      } else {
        alert(`${newText} - This text is already used.`);
      }
    }
  };

  const handleReplaceButtonClick = () => {
    if (radioButtonMarked !== null) {
      let newText = "";
      if (radioButtonMarked === 0) {
        newText = jsonData[0];
      } else if (radioButtonMarked === 1) {
        newText = jsonData[1];
      } else {
        const randomIndex = Math.floor(Math.random() * jsonData.length);
        newText = jsonData[randomIndex];
      }
      setTextContent([newText].sort());
    }
  };

  const isTextAlreadyUsed = (text: string) => {
    return textContent.includes(text);
  };

  return (
    <main className={styles.mainContent}>
      <h1 className={styles.mainContent__header}>Nagłówek H1</h1>
      <div className={styles.mainContent__container}>
        <RadioButtonList
          radioButtonMarked={radioButtonMarked}
          onChange={handleRadioButtonChange}
        />
        <ButtonOptions
          buttonClickReplace={handleReplaceButtonClick}
          buttonClickAdd={handleAddButtonClick}
        />
        <TextSection textContent={textContent} />
      </div>
    </main>
  );
};

export default MainContent;
