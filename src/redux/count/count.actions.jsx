import { ADD_COUNT, REMOVE_COUNT } from "./count.constants";

const addCount = (payload = 1) => {
  return { type: ADD_COUNT, payload };
};

const removeCount = (payload = 1) => {
  return { type: REMOVE_COUNT, payload };
};

export { addCount, removeCount };
