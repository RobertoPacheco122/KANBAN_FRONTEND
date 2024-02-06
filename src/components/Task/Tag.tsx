import React from "react";
import { IBaseEntity } from "../../types/commonTypes";
import styles from "./Tag.module.css";

export interface ITag extends IBaseEntity {
  name: string;
  backgroundColorInHexa: string;
  textColorInHexa: string;
}

interface TagProps {
  tags: ITag[] | undefined;
}

const Tag = ({ tags }: TagProps) => {
  return (
    <>
      {tags &&
        tags.map(({ name, textColorInHexa, backgroundColorInHexa }) => (
          <span
            className={styles.taskTag}
            style={{
              color: textColorInHexa,
              backgroundColor: backgroundColorInHexa,
            }}
          >
            {name}
          </span>
        ))}
    </>
  );
};

export default Tag;
