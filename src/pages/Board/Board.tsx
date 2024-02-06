import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./Board.module.css";
import List, { IList } from "../../components/List/List";
import { GET_BOARD_RELATED_DETAILS } from "../../services/api/Board";
import { IBaseEntity } from "../../types/commonTypes";

interface IBoard extends IBaseEntity {
  name: string;
  lists: IList[];
}

export interface ISubtask extends IBaseEntity {
  description: string;
  isDone: boolean;
  taskId: number;
}

export interface IUser extends IBaseEntity {
  username: string;
  email: string;
  password: string;
}

const Board = () => {
  const { enpoint, options } = GET_BOARD_RELATED_DETAILS(
    "7280db7c-a413-4a6f-bd57-7d6e2f6cd68b"
  );

  const { data: boardData } = useFetch<IBoard>(enpoint, options);

  return (
    <section className={styles.board}>
      <div className={styles.boardContainer}>
        {boardData && (
          <>
            <h1 className={styles.boardName}>{boardData.name}</h1>
            <div className={styles.list}>
              {boardData.lists?.map(({ id, name, tasks, boardId }) => (
                <List
                  key={id}
                  listId={id}
                  boardId={boardId}
                  name={name}
                  tasks={tasks}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Board;
