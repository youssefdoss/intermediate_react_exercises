'use strict';

const initialState = {
  face: null
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_FACE":
      let newState = { ...state };
      newState.face = action.face;
      return newState;
    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);