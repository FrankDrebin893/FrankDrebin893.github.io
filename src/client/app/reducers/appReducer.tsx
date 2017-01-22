import * as appActions from '../actions/app-actions';
const appReducerInitialState = {
    lang: "da"
}
export const appReducer = (state = appReducerInitialState, action: any) => {
    switch (action.type) {
        case appActions.SET_LANGUAGE:
            return Object.assign({}, state, {
                lang: action.lang
            })
        default:
            return state
    }
}

export default appReducer;