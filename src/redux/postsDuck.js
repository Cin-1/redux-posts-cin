// Constantes

export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

// Reducer

const postReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_POST:
      return [...state, { ...action.payload }];
    case DELETE_POST:
      let newState = [...state];
      newState.splice(action.payload, 1);
      return newState;
    default:
      return state;
  }
};

export default postReducer;

// Actions

export const createPost = (title, content) => {
  return {
    type: CREATE_POST,
    payload: { title, content },
  };
};

export const deletePost = (index) => {
  return {
    type: DELETE_POST,
    payload: index,
  };
};
