import React from "react";
import styles from "./List.module.css";
import Task, { ITask } from "../Task/Task";
import { IBaseEntity } from "../../types/commonTypes";
import { LIST_UPDATE } from "../../services/api/List";

export interface IList extends IBaseEntity {
  name: string;
  boardId: number;
  tasks?: ITask[];
}

interface ListProps {
  listId: string;
  boardId: string;
  name: string;
  tasks: ITask[] | undefined;
}

const List = ({ listId, boardId, name, tasks }: ListProps) => {
  const [listName, setListName] = React.useState(name);

  const handleListNameChange = ({ value }: EventTarget & HTMLInputElement) => {
    setListName(value);
  };

  const handleListNameFocusOut = async ({
    value,
  }: EventTarget & HTMLInputElement) => {
    const { enpoint, options } = LIST_UPDATE({
      id: listId,
      name: value,
      boardId: boardId,
      isDeleted: false,
    });

    const request = await fetch(enpoint, options);
    const serverResponseStatus = request.status;

    if (serverResponseStatus !== 204)
      console.log("Ocorreu algum erro ao atualizar o nome da List");
    else console.log("Nome da List atualizado com sucesso");
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.listNameContainer}>
        <input
          type="text"
          name="listName"
          value={listName}
          onChange={({ target }) => handleListNameChange(target)}
          onBlur={({ target }) => handleListNameFocusOut(target)}
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
