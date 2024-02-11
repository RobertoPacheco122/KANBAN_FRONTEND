import React from "react";
import styles from "./ListOptionsPopup.module.css";

interface IListOptionsProps {
  listId: string;
  listName: string;
  popperStyles: React.CSSProperties;
  popperRef: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
}

const ListOptionsPopup = ({
  listId,
  listName,
  popperStyles,
  popperRef,
}: IListOptionsProps) => {
  const options = [
    {
      label: "Add task",
      icon: <i className={`${styles.iconPopup} ${styles.iconAdd}`}></i>,
    },
    {
      label: "Edit",
      icon: <i className={`${styles.iconPopup} ${styles.iconEdit}`}></i>,
    },
    {
      label: "Delete",
      icon: <i className={`${styles.iconPopup} ${styles.iconDelete}`}></i>,
    },
  ];

  return (
    <div
      key={listId}
      className={styles.popupContainer}
      ref={popperRef}
      style={popperStyles}
    >
      <p className={styles.popupName}>{listName}</p>
      <ul>
        {options &&
          options.map(({ label, icon }) => (
            <li className={styles.popupItem}>
              {icon}
              {label}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListOptionsPopup;
