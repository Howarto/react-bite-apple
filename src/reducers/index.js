export default (state, action) => {
  switch (action.type) {
    case 'BITE_APPLE':
      const bites = state.nBite === 6 ? 5 : state.nBite;
      return {
        ...state,
        nBite: bites + 1
      };
    default:
      return {...state};
  }
}