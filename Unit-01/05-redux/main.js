'use strict';

const initialState = {
  face: null
};

function rootReducer(state = initialState, action) {
  let newState = { ...state }
  switch (action.type) {
    case "HAPPY_FACE":
      newState.face = "✧♡(◕‿◕✿)";
      return newState;
    case "SAD_FACE":
      newState.face = "(ﾟ∩ﾟ)";
      return newState;
    case "ANGRY_FACE":
      newState.face = "'(ᗒᗣᗕ)՞";
      return newState;
    case "CONFUSED_FACE":
      newState.face = "⚆_⚆";
      return newState;
    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);
const $face = $('#face');

$('#happy').on('click', function() {
  store.dispatch({
    type: 'HAPPY_FACE'
  });
  $face.text(store.getState().face);
});
$('#sad').on('click', function() {
  store.dispatch({
    type: 'SAD_FACE'
  });
  $face.text(store.getState().face);
});
$('#angry').on('click', function() {
  store.dispatch({
    type: 'ANGRY_FACE'
  });
  $face.text(store.getState().face);
});
$('#confused').on('click', function() {
  store.dispatch({
    type: 'CONFUSED_FACE'
  });
  $face.text(store.getState().face);
});