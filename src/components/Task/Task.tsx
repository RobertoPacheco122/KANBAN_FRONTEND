import React from "react";
import styles from "./Task.module.css";
import Priority from "./Priority";
import { IBaseEntity } from "../../types/commonTypes";
import Tag, { ITag } from "./Tag";
import { ISubtask, IUser } from "../../pages/Board/Board";

export interface ITask extends IBaseEntity {
  title: string;
  description: string;
  priority: number;
  isDone: boolean;
  dueDate: Date;
  doneDate: Date;
  listId: number;
  users?: IUser[];
  tags?: ITag[];
  subtasks?: ISubtask[];
}

interface TaskProps {
  taskId: string;
  listId: string;
  taskTitle: string;
  taskDescription: string;
  taskPriority: number;
  taskTags: ITag[] | undefined;
}

const Task = ({
  taskTitle,
  taskDescription,
  taskPriority,
  taskTags,
}: TaskProps) => {
  return (
    <>
      <li className={styles.taskCard}>
        <div className={`${styles.taskHeader} ${styles.container}`}>
          <div className={styles.taskInfos}>
            <Priority priorityType={taskPriority} />
            <Tag tags={taskTags} />
          </div>
          <i className={styles.iconOptions}></i>
        </div>
        <div className={`${styles.taskContent} ${styles.container}`}>
          <p className={styles.taskTitle}>{taskTitle}</p>
          <p className={styles.taskDescription}>{taskDescription}</p>
        </div>
        <div className={`${styles.taskFooter} ${styles.container}`}>
          <div className={styles.taskFooterSubtask}>
            <i className={`${styles.icon} ${styles.subtaskIcon}`}></i>
            <span>3</span>
          </div>
          <div className={styles.taskResponsablesContainer}>
            <i className={styles.taskResponsable}></i>
          </div>
        </div>
      </li>
    </>
  );
};

export default Task;
