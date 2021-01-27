import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../../actions/actionCreator";
import { ListItem } from "../list-item/ListItem";
import { Waypoint } from "react-waypoint";
import style from "./list.module.scss";

export const List = () => {

    const dispatch = useDispatch()
    const { characters, nextPage } = useSelector(state => state.charactersReducer)

    useEffect(() => {
        dispatch(fetchCharacters(nextPage))
    }, [])

    if (!characters || characters.length === 0) {
        return (
            <div style={ { textAlign: 'center' } }>Loading...</div>
        )
    }

    return (
        <div className={ style.wrapper }>
            <div className="container">
                <div className="row center-md">
                    <div className="col-lg-8">
                        <h1>Full list of the Rick and Morty heroes!</h1>
                        { characters && characters.length > 0 && (
                            <ul className={ style.list }>
                                { characters.map(item => (
                                    <li key={ `${item.id}` }>
                                        <ListItem character={ item } />
                                    </li>
                                )) }
                            </ul>
                        ) }
                        { nextPage
                            ? (
                                <Waypoint onEnter={ loadMore }>
                                    <h5 className={ style.loading }>
                                        Loading data...
                                    </h5>
                                </Waypoint>
                            )
                            : (
                                <div>No more characters :(</div>
                            ) }
                    </div>
                </div>
            </div>
        </div>
    )

    function loadMore() {
        if (nextPage) {
            dispatch(fetchCharacters(nextPage))
        }
    }
}