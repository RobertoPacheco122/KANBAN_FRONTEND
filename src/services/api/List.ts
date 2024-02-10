import { API_BASE_URL } from "./Api";

interface IListUpdateDto {
  id: string;
  name: string;
  boardId: string;
  isDeleted: boolean;
}

export const LIST_UPDATE = (listToUpdate: IListUpdateDto) => {
  return {
    enpoint: `${API_BASE_URL}/List`,
    options: {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listToUpdate),
    },
  };
};
