import axios from "axios";
import { put, takeEvery, call } from 'redux-saga/effects';
import { setCharacters, setOneCharacter } from "../actions/actionCreator";
import { FETCH_CHARACTERS, FETCH_ONE_CHARACTER } from "../actions/actionTypes";
import { DATA_URL } from "../constants";

export const fetchDataList = (url) => {
    if (!url) {
        return
    }
    return axios.get(url)
}

export const fetchOneItem = (id) => {
    if (!id) {
        return
    }
    return axios.get(`${DATA_URL}/${id}`)
}

function* fetchCharactersWorker(action) {
    try {
        const data = yield call(() => fetchDataList(action.page))
        yield put(setCharacters(data.data))
    } catch (err) {
        console.error(err)
    }
}

function* fetchOneCharacterWorker(action) {
    try {
        const data = yield call(() => fetchOneItem(action.id))
        yield put(setOneCharacter(data.data))
    } catch (err) {
        console.error(err)
    }
}

export function* charactersWatcher() {
    yield takeEvery(FETCH_CHARACTERS, fetchCharactersWorker)
    yield takeEvery(FETCH_ONE_CHARACTER, fetchOneCharacterWorker)
}