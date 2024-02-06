import React from "react";
import styles from "./Priority.module.css";

enum PriorityType {
  Low = 1,
  Mid = 2,
  High = 3,
}

interface PriorityProps {
  priorityType: PriorityType;
}

const Priority = ({ priorityType }: PriorityProps) => {
  const taskPriorityStyles = {
    [PriorityType.Low]: () => ({
      color: "#704b07",
      backgroundColor: "#ffeeca",
      name: "Low",
    }),
    [PriorityType.Mid]: () => ({
      color: "#0d5939",
      backgroundColor: "#e4f2ee",
      name: "Mid",
    }),
    [PriorityType.High]: () => ({
      color: "#a42534",
      backgroundColor: "#ffeae9",
      name: "High",
    }),
  };

  const priorityData = taskPriorityStyles[priorityType]?.();

  return (
    <>
      <span
        style={{
          color: priorityData?.color,
          backgroundColor: priorityData?.backgroundColor,
        }}
        className={styles.taskPriority}
      >
        {priorityData.name}
      </span>
    </>
  );
};

export default Priority;
