import axios from "axios";
import {
  GET_TODOS_FAILED,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
} from "../constants/todosConstants";

const getAllTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    const data = response.data;

    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_TODOS_FAILED,
      payload: error.message,
    });
  }
};

export default getAllTodos;
