import { API_BASE_URL } from "./Api";

export const GET_BOARD_RELATED_DETAILS = (guid: string) => {
  return {
    enpoint: `${API_BASE_URL}/Board/related/${guid}`,
    options: {
      method: "GET",
    },
  };
};
