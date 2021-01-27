import { SET_CHARACTERS, SET_ONE_CHARACTER } from "../actions/actionTypes";
import { DATA_URL } from "../constants";

const STATE = {
    nextPage: `${ DATA_URL }?page=1`,
    characters: [],
    item: null
}

export const charactersReducer = (state = STATE, { type, payload }) => {

    switch (type) {
        case SET_CHARACTERS :
            return {
                ...state,
                nextPage: payload.info.next,
                characters: [ ...state.characters, ...payload.results ]
            };
        case SET_ONE_CHARACTER :
            return {
                ...state,
                item: payload
            };
        default:
            return state;
    }
}