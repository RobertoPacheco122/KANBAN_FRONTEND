import React from "react";
import styles from "./List.module.css";
import Task, { ITask } from "../Task/Task";
import { IBaseEntity } from "../../types/commonTypes";

export interface IList extends IBaseEntity {
  name: string;
  boardId: number;
  tasks?: ITask[];
}

interface ListProps {
  listId: string;
  name: string;
  boardId: number;
  tasks: ITask[] | undefined;
}

const List = ({ listId, name, tasks }: ListProps) => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listNameContainer}>
        <input
          type="text"
          name="listName"
          value={name}
          className={styles.listName}
        />
        <i className={`${styles.icon} ${styles.iconOptions}`}></i>
      </div>
      <ul className={styles.tasksList}>
        <li>
          <button className={styles.addTaskButton}>+ Add New Task</button>
        </li>
        {tasks &&
          tasks.map(({ id, title, description, priority, tags }) => (
            <Task
              key={id}
              taskId={id}
              listId={listId}
              taskDescription={description}
              taskTitle={title}
              taskPriority={priority}
              taskTags={tags}
            />
          ))}
      </ul>
    </div>
  );
};

export default List;
