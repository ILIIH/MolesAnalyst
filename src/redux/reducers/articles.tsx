import { Article } from "../../api/Types";
import { SET_ARTICLES_LIST } from "../Types";

export const articles = (
  state: Article[] = [],
  action: { [key: string]: any }
) => {
  switch (action.type) {
    case SET_ARTICLES_LIST:
      return action.state;
    default:
      return state;
  }
};
