let initialState = {
  count: 0,
  id:'???',
  pw:'???'
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    case "LOGIN":
      return {...state, id:action.payload.id, pw:action.payload.pw }
    default:
      return { ...state};
  }
}

export default reducer;
