import { setCharacters, setOneCharacter } from "../actions/actionCreator";
import { charactersReducer } from "./charactersReducer";

const payload = {
    info: {
        next: 'next page',
    },
    results: [
        {
            created: "2017-11-04T19:22:43.665Z",
            name: "Beth Smith",
            gender: "Female",
            id: 4,
            episode: [ "https://rickandmortyapi.com/api/episode/6", "https://rickandmortyapi.com/api/episode/7" ],
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            location: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" },
            origin: { name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20" },
            species: "Human",
            status: "Alive",
            type: "",
            url: "https://rickandmortyapi.com/api/character/4"
        }
    ]
}

const character = {
    "id": 69,
    "name": "Commander Rick",
    "status": "Dead",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "unknown",
        "url": ""
    },
    "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/69.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/22"
    ],
    "url": "https://rickandmortyapi.com/api/character/69",
    "created": "2017-11-30T11:28:06.461Z"
}

const state = {
    nextPage: `url?page=1`,
    characters: [],
    item: null
}

test('characters should be added to empty array', () => {
    const action = setCharacters(payload)
    const newState = charactersReducer(state, action)
    expect(newState.characters.length).toBe(1)
});

test('next page url should be "next page"', () => {
    const action = setCharacters(payload)
    const newState = charactersReducer(state, action)
    expect(newState.nextPage).toBe('next page')
});

test('character should be added to store', () => {
    const action = setOneCharacter(character)
    const newState = charactersReducer(state, action)
    expect(newState.item.name).toBe('Commander Rick')
});