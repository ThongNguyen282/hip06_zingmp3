import actionTypes from "../actions/actionTypes";

const initState = {
    homeData: [],
    test: 'hello 1112'
}

const appReducer = (state = initState, acion) => {
    switch (acion.typpe) {
        case actionTypes.GET_HOME:

            return state;

        default:
            return state;
    }
}

export default appReducer;