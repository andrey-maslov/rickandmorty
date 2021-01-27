import { FETCH_CHARACTERS, FETCH_ONE_CHARACTER, SET_CHARACTERS, SET_ONE_CHARACTER } from "./actionTypes";

export const fetchCharacters = (page) => {
    return {
        type: FETCH_CHARACTERS,
        page
    }
}

export const setCharacters = (payload) => {
    return {
        type: SET_CHARACTERS, payload
    }
}


export const fetchOneCharacter = (id) => {
    return {
        type: FETCH_ONE_CHARACTER,
        id
    }
}

export const setOneCharacter = (payload) => {
    return {
        type: SET_ONE_CHARACTER, payload
    }
}

