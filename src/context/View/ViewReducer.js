import { types } from "../../types/types";

export const ViewReducer = (state = {}, action ) => {
  switch (action?.type) {
    case types.viewComponent:
      return {
        view: "component"
      }
    case types.viewDocumentation:
      return {
        view: "documentation"
      }
    case types.viewSplit:
      return {
        view: "split"
      }
    
    default:
      return state;
  }
}