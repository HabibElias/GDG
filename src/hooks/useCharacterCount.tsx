import { useCallback, useReducer } from "react";

interface WriteStr {
  type: "WRITE";
  payload: {
    str: string;
  };
}

const reducer = (state: string, action: WriteStr) => {
  if (action.type == "WRITE") {
    if (action.payload.str.length <= 50) {
      return action.payload.str;
    }
    return state;
  }
  return state;
};

const useCharacterCount = () => {
  const [chars, dispatch] = useReducer(reducer, "");

  const handleChange = useCallback(
    (e: any) => {
      if (e.target.value.length <= 50) {
        dispatch({
          type: "WRITE",
          payload: {
            str: e.target.value,
          },
        });
      }
    },
    [chars],
  );

  return { chars, handleChange };
};

export default useCharacterCount;
